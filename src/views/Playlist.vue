<template>
  <div class="container">
    <TheInfoBox
      v-if="playlist"
      :name="playlist.name"
      :description="playlist.description"
      :total="playlist.tracks.total"
      :duration="totalLength"
    />

    <Grid v-if="playlist" :tracks="playlist.tracks.items" :ms-to-time="msToTime" />
  </div>
</template>

<script>
import TheInfoBox from "../components/TheInfoBox";
import Grid from "../components/Grid";
import playlists from "../data/playlistData.json";

export default {
  name: "App",
  components: {
    TheInfoBox,
    Grid
  },
  props: {
    playlistId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      playlist: null,
    };
  },
  computed: {
    totalLength() {
      if (!this.playlist) return null;

      let durationMs = this.playlist.tracks.items.reduce(
        (total, el) => total + el.track.duration_ms,
        0
      );

      return this.msToTime(durationMs);
    }
  },
  created() {
    this.playlist = playlists.find(playlist => playlist.id === this.playlistId);
  },
  methods: {
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
</style>
