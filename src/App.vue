<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap');

* {
  margin: 0;
  padding: 0;
}

:root {
  --primary: #2c3e50;
  --hover: #4676a7;
  --secondary: #1DB954;
  --beige: rgba(214, 178, 150, 0.562);
  --transparent: rgba(255, 255, 255, 0);
}

.container {
  font-family: 'Didact Gothic', Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--primary);
  display: grid;
  grid-template-rows: auto auto auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

h1 {
    margin: 0;
}

p {
    margin: 10px 0 0 0;
}
</style>
