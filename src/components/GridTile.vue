<template>
  <div class="tile">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.tile {
  position: relative;
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
