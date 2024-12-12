<template>
  <SecondHeader />
  <div class="step-one-page">
    <div class="image-container">
      <img
        src="/public/images/booking-pic.png"
        alt="Booking"
        class="booking-pic" />
    </div>

    <div class="service-container">
      <h1>Vælg en ydelse</h1>
      <p class="service-description">
        Her kan du vælge hvilken ydelse du ønsker at bestille en tid til.
        <br />
        Konsultation anbefales til nye kunder.
      </p>

      <ul class="service-list">
        <li
          v-for="(service, index) in services"
          :key="index"
          class="service-item">
          <input
            type="radio"
            :id="`service-${index}`"
            :value="service"
            v-model="selectedService"
            class="service-input" />
          <label :for="`service-${index}`" class="service-label">
            {{ service }}
          </label>
        </li>
      </ul>

      <div class="button-group">
        <button class="back-button" @click="goToHomepage">
          <img src="/public/images/left-arrow.svg" alt="Back" />
        </button>
        <button
          class="next-button"
          :disabled="!selectedService"
          @click="goToStep2">
          <img src="/public/images/right-arrow.svg" alt="Next" />
        </button>
      </div>

      <div class="progress-bar">
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step"></div>
        <div class="space"></div>
        <div class="progress-step"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SecondHeader from "~/components/SecondHeader.vue";

const router = useRouter();
const { bookingData, updateBookingData, changeStep } = useBooking();

const services = [
  "Telefonisk konsultation",
  "Fysisk konsultation",
  "Massage",
  "IMS Akupunktur",
  "Led mobilisering",
  "Personlig træning",
  "Kropsterapi",
];

const selectedService = ref(null);

const goToHomepage = () => {
  router.push("/");
};

const goToStep2 = async () => {
  try {
    const payload = { service: selectedService.value };
    const response = await useFetch("http://localhost:5000/api/bookings", {
      method: "POST",
      body: payload,
    });

    if (response.error.value) {
      throw new Error(response.error.value.message);
    }

    const data = response.data.value;
    updateBookingData("id", data._id);
    updateBookingData("service", selectedService.value);
    changeStep(2);
    router.push("/booking/step2");
  } catch (error) {
    console.error("Error saving booking:", error.message);
  }
};
</script>

<style scoped>
.step-one-page {
  max-width: 1000px;
  margin: 1rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
}

.image-container {
  width: 30%;
  padding: 0;
  height: 100%;
}

.booking-pic {
  width: 100%;
}

.service-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  width: 70%;
  padding-top: 5rem;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.service-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  padding-left: 5rem;
}

.service-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.service-input {
  display: none;
}

.service-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 40px;
  font-size: 1rem;
  font-family: "PPNeueMontreal", sans-serif;
  color: #333;
}

.service-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 16px;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;
}

.service-input:checked + .service-label::before {
  background-color: #4caf50;
  border-color: #4caf50;
}

.service-label::after {
  content: "✔";
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  font-size: 13px;
  color: white;
  transition: transform 0.3s;
}

.service-input:checked + .service-label::after {
  transform: translateY(-50%) scale(1);
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48px;
  height: 48px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.1);
}

button:disabled {
  background-color: #cccccc;
  border-radius: 30px;
  cursor: not-allowed;
}

button img {
  width: 40px;
  height: 40px;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.progress-step {
  width: 70px;
  height: 15px;
  border-radius: 20px;
  background-color: #d9d9d9;
}

.progress-step.filled {
  background-color: #233d4d;
}

.space {
  width: 10px;
  background-color: white;
}
</style>
