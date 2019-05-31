<template>
  <div class="container">
    <div class="header">
      <label for="id-input">Enter your Playlist ID:</label>
      <input id="id-input" type="text" class="input" required>
      <button class="fetch-btn" @click="fetchPlaylist">FETCH</button>
    </div>

    <div class="info" v-if="playlist">
      <h1>{{ playlist.name }}</h1>
      <p>{{ playlist.description }}</p>
      <p>Tracks: {{ playlist.tracks.total }} Duration: {{ totalLength }}</p>
      <!-- @TODO: add image playlist cover at the left -->
    </div>

    <div class="cover-section" v-if="playlist">
      <div class="cover-container">
        <div v-for="track in playlist.tracks.items" :key="track.track.id"><img :src="track.track.album.images[1].url" alt="cover brudi"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      playlist: null
    };
  },
  methods: {
    fetchPlaylist() {
      let token =
        "BQAI9X2UgLMIPmVJytt3Sm8l4IugExsUr7-vyqNd2pIMIb_7TqjVnONPkRLS3yeTezchXbHx0eBIv9FTU2bkrrzg9rtQwvXeH0YTwrasTSuP2WEHWRiJKVAAPe7WRAb5fiqGg3s21QMH-d02qkUwkhF9zkh9";
      let id = "6id5t7Oao2KXLXYf1TG4MZ";
      fetch(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(body => (this.playlist = body));
    }
  },
  computed: {
    totalLength() {
      if (!this.playlist) return null;

      let durationSec = this.playlist.tracks.items.reduce(
        (total, el) => total + el.track.duration_ms,
        0
      ) / 1000;

      return `${Math.floor(durationSec / 60)}:${Math.floor(durationSec % 60)} min`
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
  grid-template-rows: 60px 10vw auto;
}

.header {
  grid-row: 1 / 2;
}

.info {
  grid-row: 2 / 3;
}

.cover-section {
  grid-row: 3 / 4;
}

.cover-container {
  display: grid;
  grid-template-columns: auto repeat(4, 300px) auto;
  grid-auto-flow: column;
  grid-gap: 5px;
}

.cover-container div {
  grid-column: 2 / 6;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
}
</style>
