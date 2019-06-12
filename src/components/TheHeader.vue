<template>
  <div class="header">
    <label for="id-input">Enter your Spotify Playlist ID:</label>
    <input
      id="id-input"
      type="text"
      class="input"
      required
      :disabled="!loggedIn"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <button class="fetch-btn" :disabled="!loggedIn" @click="$emit('fetchPlaylist')">
      FETCH
    </button>
    <button v-if="loggedIn" class="logIn-btn" disabled>
      LOGGED IN
    </button>
    <button v-else class="logIn-btn" @click="$emit('startAuth')">
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

.fetch-btn,
.logIn-btn {
  background-color: #1ED760;
  border-radius: 10px;
  margin: 3px;
  padding: 5px;
}

.fetch-btn:hover,
.logIn-btn:hover {
    background-color: rgb(148, 255, 186);
}
</style>
