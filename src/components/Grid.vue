<template>
  <div class="cover-section">
    <div class="cover-grid">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.cover-section {
  grid-row: 3 / 4;
  margin: 25px 0;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fill, 300px);
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 10px;
}
</style>
