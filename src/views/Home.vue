<template>
  <div class="home">
    <router-link
      v-for="playlist in playlists"
      :key="playlist.id"
      :to="'/' + playlist.id"
      class="playlist-btn"
    >
      <button>{{ playlist.name }}</button>
    </router-link>
  </div>
</template>

<script>
import playlists from "../data/playlistData.json";

export default {
  name: "Home",
  data() {
    return {
      playlists
    };
  }
};
</script>

<style>
.home {
  background: rgb(132, 132, 161);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.playlist-btn {
  margin: 5px 0;
}
</style>
