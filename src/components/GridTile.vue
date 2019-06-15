<template>
  <div class="tile">
    <div class="track-info">
      <p>Artist: {{ track.artists[0].name }}</p>
      <p>Track: {{ track.name }}</p>
      <p>Duration: {{ durationStr }}</p>
    </div>
    <img :src="track.album.images[1].url" alt="image of cover">
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    track: {
      type: Object,
      required: true
    },
    msToTime: {
      type: Function,
      required: true
    }
  },
  computed: {
    durationStr() {
      return this.msToTime(this.track.duration_ms);
      // @TODO: Optimize duration calculation
    }
  }
};
</script>

<style>
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
