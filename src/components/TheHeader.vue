<template>
  <div class="header">
    <label for="id-input">Enter your Playlist ID:</label>
    <input
      id="id-input"
      type="text"
      class="input"
      required
      :disabled="!loggedIn"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <button
      class="fetch-btn"
      :disabled="!loggedIn"
      @click="$emit('fetchPlaylist')"
    >
      FETCH
    </button>
    <button v-if="loggedIn" disabled>
      LOGGED IN
    </button>
    <button v-else @click="$emit('startAuth')">
      LOGIN
    </button>
  </div>
</template>

<script>
export default {
  props: {
      loggedIn: {
          type: Boolean,
          default: false
      },
      value: {
          type: String,
          required: true
      }
  }
};
</script>

<style>
.header {
  grid-row: 1 / 2;
  margin: 20px 0;
}
</style>
