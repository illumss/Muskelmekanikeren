<template>
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
      <button class="back-button" @click="goToHomepage">Back</button>
      <button
        class="next-button"
        :disabled="!selectedService"
        @click="goToStep2">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
.service-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 28px;
  color: #4caf50;
  margin-bottom: 15px;
}

.service-description {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.service-list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.service-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.service-input {
  margin-right: 10px;
}

.service-label {
  font-size: 18px;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.back-button {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ccc;
}

.back-button:hover {
  background-color: #e2e6ea;
  border-color: #adb5bd;
}

.next-button {
  background-color: #28a745;
}

.next-button:hover {
  background-color: #218838;
}

.next-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
