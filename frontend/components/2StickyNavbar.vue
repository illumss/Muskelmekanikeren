<template>
  <nav class="sticky-navbar">
    <a href="#prices">Priser og ydelser</a>
    <a href="#about">Om Muskelmekanikeren</a>
    <a href="#contact">Kontakt</a>
    <button class="book-button" @click="goToBooking">Book tid</button>
  </nav>
</template>

<script setup>
const goToBooking = () => {
  navigateTo("/booking/step1");
};
</script>

<style scoped>
.sticky-navbar {
  position: sticky;
  top: 0;
  background-color: #333;
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 100;
}

.sticky-navbar a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.sticky-navbar a:hover {
  text-decoration: underline;
}

.book-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
}

.book-button:hover {
  background-color: #0056b3;
}
</style>
