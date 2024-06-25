<script>
  import { computed } from 'vue';
  import { useCart } from '../stores/cart';
  
  export default {
    setup() {
      const { cart } = useCart();
  
      const total = computed(() =>
        cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
      );
  
      return {
        cart,
        total,
      };
    },
  };
  </script>

<template>
    <div class="cart-page py-8">
      <h2 class="text-xl font-bold mb-4">Shopping Cart</h2>
      <div v-if="cart.length" class="cart-items">
        <div v-for="item in cart" :key="item.name" class="cart-item flex justify-between items-center mb-2 p-2 border rounded shadow-sm">
          <p>{{ item.name }}</p>
          <p>{{ item.quantity }} x ${{ item.price }} = ${{ item.price * item.quantity }}</p>
        </div>
        <p class="total font-bold text-lg mt-4">Total: ${{ total }}</p>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <style scoped>
  .cart-page {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .cart-item {
    background: white;
  }
  
  .total {
    color: #2c3e50;
  }
  </style>
  
  

  