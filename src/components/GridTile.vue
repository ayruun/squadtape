<template>
  <div class="tile">
    <img :src="track.album.images[1].url" alt="image of cover">

    <div class="track-info">
      <p>Artist: {{ track.artists[0].name }}</p>
      <p>Track: {{ track.name }}</p>
      <p>Duration: {{ durationStr }}</p>
      <audio ref="audio" :src="track.preview_url" />
      <button class="controls" @click="togglePlay">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
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
  data() {
    return { isPlaying: false };
  },
  computed: {
    durationStr() {
      return this.msToTime(this.track.duration_ms);
      // @TODO: Optimize duration calculation
    },
    buttonText() {
      if (!this.isPlaying) {
        return "PLAY";
      } else {
        return "PAUSE";
      }
    }
  },
  methods: {
    togglePlay() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.isPlaying = true;
        this.$emit("playing", this.track.id);
      } else {
        this.$refs.audio.pause();
        this.isPlaying = false;
      }
    },
    pauseTrack() {
      this.$refs.audio.pause();
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

.controls {
  margin-top: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  background-color: white;
}

.controls:focus {
  outline: 0;
}

.controls:hover {
  background-color: rgb(192, 255, 192);
}
</style>
