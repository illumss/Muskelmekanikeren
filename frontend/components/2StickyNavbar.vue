<template>
  <nav class="sticky-navbar">
    <a href="#prices" class="nav-button" data-section="prices"
      >Priser og ydelser</a
    >
    <a href="#about" class="nav-button" data-section="about">Om os</a>
    <a href="#contact" class="nav-button" data-section="contact">Kontakt</a>
    <a class="nav-button book-button" @click="goToBooking">Book tid</a>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const goToBooking = () => {
  navigateTo("/booking/step1");
};

onMounted(() => {
  const navbar = document.querySelector(".sticky-navbar");
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll(".nav-button");

  let isSticky = false;

  const updateStickyClass = () => {
    const shouldBeSticky = window.scrollY > 450;
    const isSmallScreen = window.innerWidth <= 960;

    if (shouldBeSticky && !isSticky) {
      navbar.classList.add("sticky");
      if (isSmallScreen) {
        navbar.classList.add("vertical");
      }
      isSticky = true;
    } else if (!shouldBeSticky && isSticky) {
      navbar.classList.remove("sticky");
      navbar.classList.remove("vertical");
      isSticky = false;
    }
  };

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

  window.addEventListener("scroll", updateStickyClass);
  window.addEventListener("resize", updateStickyClass);

  onUnmounted(() => {
    window.removeEventListener("scroll", updateStickyClass);
    window.removeEventListener("resize", updateStickyClass);
    observer.disconnect();
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
  background-color: #e0eaef;
  transition: 0.3s ease;
}

.sticky-navbar.sticky {
  position: fixed;
  top: 0;
  flex-direction: row;
  height: auto;
  width: 100%;
}

.sticky-navbar.sticky.vertical {
  flex-direction: column;
  height: 100vh;
  width: 12%;
  min-width: 100px;
  padding: 50px 0px;
  background-color: transparent;
  justify-content: flex-start;
}

.nav-button {
  background-color: #f7a941;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #233d4d;
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
  transition: color 0.3s ease;
}

.sticky-navbar.sticky.vertical .nav-button {
  margin: 15px 0;
  width: 100%;
  margin: 10px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 960px) {
  .sticky-navbar {
    padding: 0px;
  }
  .sticky-navbar.sticky {
    flex-direction: column;
  }
  .nav-button {
    margin: 10px 10px;
    font-size: 12px;
    padding: 6px 10px;
    min-width: 20%;
  }
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

@media (max-width: 1440px) {
  .sticky-navbar {
    padding: 8px;
  }
  :deep(.nav-button) {
    margin: 0 20px;
    font-size: 13px;
    padding: 8px 12px;
    min-width: 15%;
  }
}

@media (max-width: 960px) {
  .sticky-navbar {
    flex-wrap: wrap;
    padding: 0px;
  }
  :deep(.nav-button) {
    margin: 10px 10px;
    font-size: 12px;
    padding: 6px 10px;
    min-width: 20%;
  }
}
</style>
