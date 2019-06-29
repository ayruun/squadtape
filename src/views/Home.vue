<template>
  <div class="home">
    <div class="info">
      <h1>Squad Tape</h1>
      <p>Welcome to the best place to find new music.</p>
      <p>Just select a playlist and enjoy.</p>
    </div>
    <Grid>
      <GridTile
        v-for="playlist in playlists"
        :key="playlist.id"
      >
        <img
          :src="playlist.images[0].url"
          alt="image of cover"
          @click="$router.push('/' + playlist.id)"
        />
        <div class="track-info"> 
          {{ playlist.name }}
        </div>
      </GridTile>
    </Grid>
  </div>
</template>

<script>
import Grid from "../components/Grid";
import GridTile from "../components/GridTile.vue";
import playlists from "../data/playlistData.json";

export default {
  name: "Home",
  components: {
    Grid,
    GridTile
  },
  data() {
    return {
      playlists
    };
  }
};
</script>

<style>
.home {
  background: rgb(255, 255, 255);
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
