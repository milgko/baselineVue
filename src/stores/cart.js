import { ref } from 'vue';

const cart = ref([]);

const addToCart = (product) => {
  const existingProduct = cart.value.find((item) => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.value.push(product);
  }
};

export const useCart = () => {
  return {
    cart,
    addToCart,
  };
};