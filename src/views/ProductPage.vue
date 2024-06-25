<script>
  import { ref } from 'vue';
  import { useCart } from '../stores/cart';
  
  export default {
    setup() {
      const images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300/0000FF/808080',
        'https://via.placeholder.com/300/FF0000/FFFFFF',
      ];
      const selectedImage = ref(images[0]);
      const quantity = ref(1);
      const addedToCart = ref(false);
      const { addToCart } = useCart();
  
      const selectImage = (image) => {
        selectedImage.value = image;
      };
  
      const handleAddToCart = () => {
        addToCart({ name: 'The Super Cool Product', price: 100, quantity: quantity.value });
        addedToCart.value = true;
        setTimeout(() => (addedToCart.value = false), 3000);
      };
  
      const increaseQuantity = () => {
        quantity.value++;
      };
  
      const decreaseQuantity = () => {
        if (quantity.value > 1) quantity.value--;
      };
  
      return {
        images,
        selectedImage,
        selectImage,
        handleAddToCart,
        addedToCart,
        quantity,
        increaseQuantity,
        decreaseQuantity,
      };
    },
  };
  </script>

<template>
    <div class="product-page flex flex-col md:flex-row items-center md:items-start py-8">
      <div class="image-gallery flex flex-col items-center md:w-1/2">
        <img :src="selectedImage" alt="Large View" class="main-image w-full h-64 object-cover rounded shadow-md mb-4">
        <div class="thumbnail-images flex">
          <img
            v-for="image in images"
            :key="image"
            :src="image"
            @click="selectImage(image)"
            class="thumbnail w-20 h-20 object-cover cursor-pointer mr-2 rounded shadow-sm border-2"
            :class="{ 'border-orange-500': selectedImage === image }"
          >
        </div>
      </div>
      <div class="product-details md:w-1/2 md:ml-8">
        <h2 class="text-xl font-bold mb-2">The Super Cool Product</h2>
        <p class="text-gray-500 mb-4">This product is so cool you can't even see what it is. It's that cool.</p>
        <div class="price mb-4">
          <span class="text-2xl font-bold">$100.00</span>
          <span class="text-orange-500 font-bold ml-2">50%</span>
          <p class="text-gray-500 line-through">$200.00</p>
        </div>
        <div class="quantity-selector flex items-center mb-4">
          <button @click="decreaseQuantity" class="px-3 py-1 bg-gray-200 rounded">-</button>
          <span class="mx-2">{{ quantity }}</span>
          <button @click="increaseQuantity" class="px-3 py-1 bg-gray-200 rounded">+</button>
        </div>
        <button @click="handleAddToCart" class="add-to-cart-btn bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-full">Add to Cart</button>
        <p v-if="addedToCart" class="mt-2 text-green-500">Product added to cart!</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .product-page {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .main-image {
    max-height: 400px;
  }
  
  .thumbnail-images img {
    transition: border-color 0.2s;
  }
  
  .add-to-cart-btn {
    font-weight: bold;
  }
  </style>
  
  
  
  
  