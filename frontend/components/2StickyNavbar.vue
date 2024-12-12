<template>
  <nav class="sticky-navbar">
    <a href="#prices" class="nav-button" data-section="prices"
      >Priser og ydelser</a
    >
    <a href="#about" class="nav-button" data-section="about"
      >Om Muskelmekanikeren</a
    >
    <a href="#contact" class="nav-button" data-section="contact">Kontakt</a>
    <a class="nav-button book-button" @click="goToBooking">Book tid</a>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";

const goToBooking = () => {
  navigateTo("/booking/step1");
};

onMounted(() => {
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll(".nav-button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navButton = document.querySelector(
          `.nav-button[data-section="${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
          navButton?.classList.add("active");
        } else {
          navButton?.classList.remove("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetId = button.getAttribute("href")?.slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
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
  border-radius: 30px;
  padding: 10px 15px;
  margin: 0 45px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  min-width: 12%;
}

.nav-button:hover {
  background-color: #233d4d;
  color: #f7a941;
}

.nav-button.active {
  background-color: #233d4d;
  color: #f7a941;
}

.book-button {
  background-color: #f7a941;
}
</style>
