<template>
  <div class="prices-section">
    <h2>Priser og ydelser</h2>
    <div class="price-container">
      <div class="price-box" v-for="(item, index) in prices" :key="index">
        <h3>{{ item.title }}</h3>
        <p class="price">{{ item.price }}</p>
        <p class="note" v-if="item.note">{{ item.note }}</p>
        <div class="arrow" @click="toggleExpand(index)">
          {{ expandedIndex === index ? "⌃" : "⌄" }}
        </div>

        <transition name="fade">
          <div v-if="expandedIndex === index" class="description">
            <p>{{ item.description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expandedIndex = ref(null);

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

const prices = [
  {
    title: "Fysioterapi",
    description:
      "30 mins konsultation\nMin passion indenfor fysioterapi og træning er bevægelse. Jeg arbejder på at optimere bevægelighed i problematiske led.",
    price: "490 kr.",
    note: "Dækket af sundhedsforsikring",
  },
  {
    title: "Akupunktur",
    description:
      "Mulighed for el terapeutisk behandling for at lindre smerter og spændinger.",
    price: "375 kr.",
    note: "Dækket af sundhedsforsikring",
  },
  {
    title: "Personlig træning",
    description:
      "Opstart screening og skræddersyet træningsforløb tilpasset dine behov.",
    price: "Kontakt for aftale",
    note: "",
  },
];
</script>

<style scoped>
.prices-section {
  text-align: center;
  padding: 3rem;
  font-family: "Arial", sans-serif;
}

.price-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.price-box {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: left;
  transition: transform 0.3s ease;
}

.price-box:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}

.note {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 1rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 1rem;
}

.arrow {
  font-size: 1.5rem;
  color: #f4a300;
  cursor: pointer;
  text-align: right;
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
