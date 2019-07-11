<template>
  <div class="cover-section">
    <div class="cover-grid">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cover-section {
  grid-row: 3 / 4;
  margin: 10px 25px 5px 25px;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 300px));
  grid-template-rows: repeat(auto-fill, minmax(auto, 300px));
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 10px;
}

@media (max-width: 850px) {
  .cover-grid {
    grid-template-columns: repeat(3, minmax(auto, 300px));
  }
}

@media (max-width: 600px) {
  .cover-grid {
    grid-template-columns: repeat(2, minmax(auto, 300px));
  }
}

</style>
