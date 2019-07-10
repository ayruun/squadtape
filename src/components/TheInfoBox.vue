<template>
  <div class="info">
    <div
      class="spotify-btn"
      @mouseenter="iconColor = 'var(--spotify-green)'"
      @mouseleave="iconColor = 'var(--dark-blue)'"
    >
      <h1>{{ name }}</h1>

      <IconSpotify
        :color="iconColor"
        :href="href"
      />
    </div>
    <p>{{ description }}</p>
    <p>Tracks: {{ total }} Duration: {{ duration }}</p>
    <!-- @TODO: add image playlist cover at the left -->
  </div>
</template>

<script>
import IconSpotify from './icons/IconSpotify';

export default {
  components: {
    IconSpotify
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    total: {
      type: Number,
      default: 0
    },
    duration: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      iconColor: "var(--dark-blue)"
    }
  },
  computed: {
    href() {
      return `spotify:playlist:${this.id}`
    }
  }
};
</script>

<style>
</style>
