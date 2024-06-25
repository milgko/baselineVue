<script>
import { useCart } from '../stores/cart';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { cart } = useCart();
    const router = useRouter();

    const navigateToCart = () => {
      router.push('/cart');
    };

    return {
      cart,
      navigateToCart,
    };
  },
};
</script>

<template>
    <nav class="navbar flex justify-between items-center py-4">
      <div class="logo text-xl font-bold">coolio</div>
      <div class="flex items-center space-x-4">
        <button @click="navigateToCart" class="relative">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.879 4.93M7 13h10l4-8H5.878M7 13L5.878 9M7 13l-2 5h14l-2-5M7 13h10M5 21h14a2 2 0 002-2v-4H3v4a2 2 0 002 2z"></path>
          </svg>
          <span v-if="cart.length" class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        </button>
        <img src="https://via.placeholder.com/40" alt="Profile" class="w-10 h-10 rounded-full">
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    border-bottom: 1px solid #e5e5e5;
  }
  
  .nav-links a {
    transition: color 0.3s;
  }
  </style>
  