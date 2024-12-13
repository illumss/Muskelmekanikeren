<template>
  <div class="testimonials-section">
    <h1>Anmeldelser</h1>
    <div class="testimonial-container">
      <div
        class="testimonial-card"
        v-for="(testimonial, index) in testimonials"
        :key="index">
        <img :src="testimonial.image" :alt="testimonial.name" class="person" />
        <h3 class="name">{{ testimonial.name }}</h3>
        <p class="role">{{ testimonial.role }}</p>
        <img src="/images/quote-icon.png" alt="Quote" class="quote-icon" />
        <p class="quote">
          {{ testimonial.quote }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    name: "Kira Hansen",
    role: "Tandplejer",
    image: "/images/testimonial_1.jpg",
    quote:
      "Jeg opsøgte Dennis pga. skuldersmerter. Han undersøgte mig grundigt og lavede et træningsprogram med progression. Nu er min skulder symptomfri, og jeg er stærkere end før. Jeg kan varmt anbefale Dennis.",
  },
  {
    name: "Jens Jacobsen",
    role: "Crossfitter",
    image: "/images/testimonial_2.jpg",
    quote:
      "Som crossfitter på højt niveau, er det for mig vigtig med professionel behandling. Hos Dennis har jeg mødt målrettet behandling og fået høj faglig vurdering af mine “skader”.",
  },
  {
    name: "Maria Eg",
    role: "Stud. BSc idræt",
    image: "/images/testimonial_3.jpg",
    quote:
      "Jeg var i behandling hos Dennis i 4-5 måneder for en ankelskade. Han fandt hurtigt den rette behandling og gav mig øvelser til at støtte forløbet. I dag har jeg ingen gener og bruger stadig øvelserne.",
  },
];
</script>

<style scoped>
.testimonials-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 8rem;
  padding-right: 8rem;
  background-color: #f5f3f3;
}

.testimonial-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.testimonial-card {
  background-color: #e8f1f8;
  border-radius: 10px;
  padding: 2rem 2rem 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

h1 {
  margin-bottom: 2rem;
}

.role {
  color: #727272;
  margin: 0;
  padding: 0;
}

.person {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -40px;
  border: 4px solid #e8f1f8;
}

.testimonial-card h3 {
  margin: 2.5rem 0 0.5rem;
}

.quote-icon {
  width: 20px;
  height: 20px;
  align-self: flex-start;
}

.quote {
  margin: 1rem auto;
  color: #575757;
}
@media (max-width: 1440px) {
  .testimonials-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
@media (max-width: 960px) {
  .testimonials-section {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  :deep(h1) {
    margin-left: 2rem;
  }

  :deep(.testimonial-card) {
    padding: 1.5rem;
  }

  :deep(.person) {
    width: 80px;
    height: 80px;
  }

  :deep(.testimonial-card h3) {
    margin: 2rem 0 0.5rem;
  }

  :deep(.quote) {
    font-size: 0.9rem;
  }
}
@media (max-width: 375px) {
  .testimonials-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  :deep(h1) {
    margin-left: 1rem;
  }

  :deep(.testimonial-card) {
    padding: 1rem;
  }

  :deep(.person) {
    width: 60px;
    height: 60px;
  }

  :deep(.quote) {
    font-size: 0.8rem;
  }
}
</style>
