<template>
  <div class="cover-section">
    <div class="cover-grid">
      <GridTile v-for="track in tracks" :key="track.track.id" :track="track.track" :ms-to-time="msToTime" />
    </div>
  </div>
</template>

<script>
import GridTile from "./GridTile.vue";

export default {
  components: {
    GridTile
  },
  props: {
    tracks: {
      type: Array,
      required: true
    },
    msToTime: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.cover-section {
  grid-row: 3 / 4;
  margin: 25px 0;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fill, 300px);
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 10px;
}
</style>
