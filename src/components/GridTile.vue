<template>
  <div class="tile" :class="{ clickable }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    clickable: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.tile {
  position: relative;
}

.clickable {
  cursor: pointer;
}

.tile img {
  opacity: 1;
  transition: 0.5s ease;
}

.tile:hover img {
  opacity: 0.3;
}

.tile:hover .track-info {
  opacity: 1;
}
</style>
