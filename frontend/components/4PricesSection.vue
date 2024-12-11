<template>
  <div class="prices-section">
    <h1>Priser og ydelser</h1>
    <div class="price-container">
      <div class="price-box" v-for="(item, index) in prices" :key="index">
        <h3>{{ item.title }}</h3>
        <p class="subtitle">{{ item.subtitle }}</p>
        <p class="price">{{ item.price }}</p>
        <p class="note" v-if="item.note">{{ item.note }}</p>
        <div class="readmore" @click="toggleExpand(index)">
          {{ expandedIndex === index ? "Læs mindre" : "Læs mere" }}
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
    subtitle: "30 minutters konsultation",
    description:
      "En personlig konsultation med fokus på at evaluere og behandle muskel- og ledsmerter samt forbedre din funktionelle bevægelighed.",
    price: "490,-",
    note: "Dækket af sundhedsforsikring",
  },
  {
    title: "Akupunktur",
    subtitle: "Mulighed for el terapeutisk behandling",
    description:
      "En effektiv metode til smertelindring og afspænding, der kombinerer traditionelle nåle og moderne el-terapi for maksimal effekt.",
    price: "375,-",
    note: "Dækket af sundhedsforsikring",
  },
  {
    title: "Personlig træning",
    subtitle: "Opstart screening eller skræddersyet forløb",
    description:
      "Opstart screening og skræddersyet træningsforløb tilpasset dine behov.",
    price: "600,-",
    note: "Kontakt for aftale",
  },
  {
    title: "Message",
    subtitle: "1 times behandling",
    description:
      "En afslappende massagebehandling, der lindrer spændinger og fremmer velvære. Fokus på at reducere stress og forbedre blodcirkulationen.",
    price: "550,-",
    note: "Kontakt for aftale",
  },
  {
    title: "Ledmobilisering",
    subtitle: "1 times behandling",
    description:
      "En manuel behandlingsteknik designet til at forbedre ledbevægelighed og reducere smerte. Ideel for dem med stive eller smertefulde led.",
    price: "490,-",
    note: "Kontakt for aftale",
  },
  {
    title: "Kropsterapi",
    subtitle: "Skånsom og blid behandling",
    description:
      "En holistisk tilgang til krop og sind, der kombinerer afspænding og behandling af fysiske og psykiske spændinger.",
    price: "445,-",
    note: "Kontakt for aftale",
  },
];
</script>

<style scoped>
.prices-section {
  padding: 5rem;
  background: white;
  font-family: "Arial", sans-serif;
}

.price-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
}

.price-container::-webkit-scrollbar {
  height: 8px;
  background: #c1c1c1;
  border-radius: 10px;
}

.price-container::-webkit-scrollbar-thumb {
  background: #233d4d;
  border-radius: 10px;
}

.price-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.price-box {
  flex: 0 0 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease;
  background: white;
}

.price-box:hover {
  transform: translateY(-5px);
}

.price {
  font-family: "Manrope", sans-serif;
  padding-top: 3rem;
  font-weight: 500;
  font-size: 2.6rem;
}

.subtitle {
  color: #888;
  font-size: 0.8rem;
}

.note {
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 1rem;
}

h3 {
  padding: 0;
  margin: 0;
}

.readmore {
  font-size: 0.8rem;
  font-weight: bold;
  color: #f4a300;
  cursor: pointer;
  text-align: right;
  margin-top: 1.5rem;
  text-decoration: underline;
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
