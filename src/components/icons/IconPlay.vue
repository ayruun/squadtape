<template>
  <div class="icon-play">
    <svg
      style="width:100%;height:100%"
      viewBox="0 0 24 24"
    >
      <path
        :fill="color"
        d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
    name: "IconPlay",
    props: {
      color: {
        type: String,
        required: true
      }
    }
};
</script>

<style>
</style>
