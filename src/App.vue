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
      <div class="cover-grid">
        <div class="tile" v-for="track in playlist.tracks.items" :key="track.track.id">
          <div class="track-info">
            <p>Artist:</p>
            <p>Track:</p>
            <p>Duration:</p>
          </div>
          <img :src="track.track.album.images[1].url" alt="cover brudi">
        </div>
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
        "BQBnPiPOy-IJjnHtCZi5NABncj0QXgjSHwgeYAaiHYaHy6naLt4YZ0XuQSSTK_o5eSPo-6V0FuLyFHtOJZTddEl4NWMgiqmhvb6nAf1cEYLUcixjPerkUHVnnAiktejFGUFqXIEzpo3dWaUI2NU9UlCfKzM";
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

      let durationSec =
        this.playlist.tracks.items.reduce(
          (total, el) => total + el.track.duration_ms,
          0
        ) / 1000;

      return `${Math.floor(durationSec / 60)}:${Math.floor(
        durationSec % 60
      )} min`;
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

.header {
  grid-row: 1 / 2;
  margin: 20px 0;
}

.info {
  grid-row: 2 / 3;
  margin: 20px 0;
}

.cover-section {
  grid-row: 3 / 4;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fill, 300px);
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 10px;
}

.tile {
  position: relative;
}

.tile img {
  opacity: 1;
  transition: 0.5s ease;
}

.tile:hover img {
  opacity: 0.3;
}

.track-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(46, 46, 46);
  opacity: 0;
}

.tile:hover .track-info {
  opacity: 1;
}
</style>
