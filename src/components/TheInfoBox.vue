<template>
  <div class="info">
    <div
      class="spotify-btn"
      @mouseenter="iconColor = 'var(--secondary)'"
      @mouseleave="iconColor = 'var(--primary)'"
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
      iconColor: "var(--primary)"
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
.info {
  background: url("https://www.aarigato.de/assets/images/background.png");
  background-position: center -200px;
  width: 1230px;
  height: 150px;
  margin: 10px 25px 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 850px) {
  .info {
    width: 920px;
  }
}

@media (max-width: 600px) {
  .info {
    width: 610px;
  }
}
</style>
