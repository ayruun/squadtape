<template>
  <div class="container">
    <TheHeader
      v-model="playlistId"
      :logged-in="!!token"
      @fetchPlaylist="fetchPlaylist"
      @startAuth="startAuth"
    />

    <TheInfoBox
      v-if="playlist"
      :name="playlist.name"
      :description="playlist.description"
      :total="playlist.tracks.total"
      :duration="totalLength"
    />

    <Grid v-if="playlist" :tracks="playlist.tracks.items" :msToTime="msToTime"/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheInfoBox from "./components/TheInfoBox";
import Grid from "./components/Grid";

export default {
  name: "App",
  components: {
    TheHeader,
    TheInfoBox,
    Grid
  },
  data() {
    return {
      playlist: null,
      clientId: "0c45b5ac0e5747e5b9f404c7b6f014fb",
      redirectUri: "http://localhost:8080",
      playlistId: "6id5t7Oao2KXLXYf1TG4MZ",
      token: ""
    };
  },
  computed: {
    totalLength() {
      if (!this.playlist) return null;

      let durationMs =
        this.playlist.tracks.items.reduce(
          (total, el) => total + el.track.duration_ms,
          0
        );

      return this.msToTime(durationMs);
    }
  },
  mounted() {
    let tokenStr = window.location.hash.replace(
      /.*access_token=([^&]*).*/,
      "$1"
    );
    if (tokenStr) {
      this.token = tokenStr;
      window.location.hash = "";
    }
  },
  methods: {
    startAuth() {
      window.location = `https://accounts.spotify.com/authorize?client_id=${
        this.clientId
      }&response_type=token&redirect_uri=${
        this.redirectUri
      }&scope=user-read-private%20user-read-email`;
    },
    fetchPlaylist() {
      fetch(`https://api.spotify.com/v1/playlists/${this.playlistId}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          if (res.status === 401) {
            this.token = null;
            throw Error(`Auth token expired, please login again`);
          }
          throw Error(`Playlist rejected with status code ${res.status}`);
        })
        .then(body => (this.playlist = body))
        .catch(console.error);
    },
    msToTime(duration) {
      var seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt(duration / (1000 * 60));

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return `${minutes}:${seconds} min`;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  display: grid;
  grid-template-rows: auto auto auto;
}
</style>
