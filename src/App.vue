<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="app-container mx-auto p-4">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
.app-container {
  
  margin: auto;
}
</style>




