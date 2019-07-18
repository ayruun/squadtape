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
  margin: 10px 25px 5px 25px;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 300px));
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 10px;
}

.tile img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 450px) {
  .info {
    font-size: 0.8em;
    height: auto;
  }
}

@media (min-width: 800px) {
  .cover-grid {
    grid-template-columns: repeat(3, minmax(100px, 300px));
  }
}

@media (min-width: 1100px) {
  .cover-grid {
    grid-template-columns: repeat(4, minmax(100px, 300px));
  }
}

</style>
