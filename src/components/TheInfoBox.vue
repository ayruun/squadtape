<template>
  <div class="info">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <p>Tracks: {{ total }} Duration: {{ duration }}</p>
    <!-- @TODO: add image playlist cover at the left -->
  </div>
</template>

<script>
export default {
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
    }
  }
};
</script>

<style>
.info {
  grid-row: 2 / 3;
  margin: 20px 0;
}

.info h1 {
    margin: 0 0 10px 0;
}

.info p {
    margin: 10px 0 0 0;
}
</style>
