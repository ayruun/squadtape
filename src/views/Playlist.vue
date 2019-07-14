<template>
  <div class="playlist-view">
    <TheInfoBox
      v-if="playlist"
      :id="playlistId"
      :name="playlist.name"
      :description="playlist.description"
      :total="playlist.tracks.total"
      :duration="totalLength"
    />

    <audio
      ref="audio"
      :src="activeTrack"
      @ended="activeTrack = null"
    />

    <Grid v-if="playlist">
      <GridTile
        v-for="{ track } in playlist.tracks.items"
        :key="track.id"
        :clickable="!!track.preview_url"
      >
        <img
          :src="track.album.images[1].url"
          :alt="track.album.name"
          @click="track.preview_url && togglePlay(track.preview_url)"
        />

        <div class="track-info">
          <p>Artist: {{ track.artists[0].name }}</p>
          <p>Track: {{ track.name }}</p>
          <p>Duration: {{ msToTime(track.duration_ms) }}</p>

          <button
            v-if="track.preview_url"
            class="controls"
            @click="togglePlay(track.preview_url)"
            @mouseenter="color = 'var(--secondary)'"
            @mouseleave="color = 'var(--primary)'"
          >
            <IconPlay
              v-if="activeTrack !== track.preview_url"
              :color="color"
            />
            <IconPause
              v-else
              :color="color"
            />
          </button>
        </div>
      </GridTile>
    </Grid>

    <TheFooter />
  </div>
</template>

<script>
import TheInfoBox from "../components/TheInfoBox";
import Grid from "../components/Grid";
import GridTile from "../components/GridTile.vue";
import TheFooter from "../components/TheFooter.vue";
import playlists from "../data/playlistData.json";
import IconPlay from "../components/icons/IconPlay";
import IconPause from "../components/icons/IconPause";

export default {
  name: "App",
  components: {
    TheInfoBox,
    Grid,
    GridTile,
    TheFooter,
    IconPlay,
    IconPause
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
      activeTrack: "",
      color: "var(--primary)"
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
    },
    togglePlay(previewUrl) {
      if (this.activeTrack == previewUrl) {
        if (this.$refs.audio.paused) {
          this.$refs.audio.play();
        } else {
          this.$refs.audio.pause();
          this.activeTrack = null;
        }
      } else {
        this.activeTrack = previewUrl;
        this.$nextTick(() => {
          this.$refs.audio.play();
        });
      }
    }
  }
};
</script>

<style>
.playlist-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.controls {
  margin-top: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  line-height: 50px;
  background-color: var(--transparent);
  cursor: pointer;
}

.controls:focus {
  outline: 0;
}

.track-info {
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--primary);
  opacity: 0;
}
</style>
