<template>
  <div class="home">
    <div class="info">
      <div
        class="spotify-btn"
        @mouseenter="iconColor = 'var(--secondary)'"
        @mouseleave="iconColor = 'var(--primary)'"
      >
        <h1>Squad Tape</h1>
        <IconSpotify :color="iconColor" href="spotify:user:ayruun"/>
      </div>
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
        <div class="track-info">{{ playlist.name }}</div>
      </GridTile>
    </Grid>
  </div>
</template>

<script>
import Grid from "../components/Grid";
import GridTile from "../components/GridTile.vue";
import IconSpotify from "../components/icons/IconSpotify.vue";
import playlists from "../data/playlistData.json";

export default {
  name: "Home",
  components: {
    Grid,
    GridTile,
    IconSpotify
  },
  data() {
    return {
      playlists,
      iconColor: "2c3e50"
    };
  }
};
</script>

<style>
.home {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spotify-btn {
  display: inline-flex;
  align-items: center;  
}

.playlist-btn {
  margin: 5px 0;
}
</style>
