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

</style>
