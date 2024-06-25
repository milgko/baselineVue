<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="app-container container mx-auto p-4">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
.app-container {
  max-width: 2400px;
  margin: auto;
}
</style>




