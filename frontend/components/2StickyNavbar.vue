<template>
  <nav class="sticky-navbar">
    <a href="#prices" class="nav-button">Priser og ydelser</a>
    <a href="#about" class="nav-button">Om Muskelmekanikeren</a>
    <a href="#contact" class="nav-button">Kontakt</a>
    <a class="nav-button book-button" @click="goToBooking">Book tid</a>
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
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 100;
  background-color: #cbe2ec;
}

.nav-button {
  background-color: #f7a941;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 45px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  min-width: 12%;
}

.nav-button:hover {
  background-color: #0056b3;
  text-decoration: none;
}

.book-button {
  background-color: #f7a941;
}
</style>
