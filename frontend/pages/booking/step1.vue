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
            :id="'service-' + index"
            :value="service"
            v-model="selectedService"
            class="service-input" />
          <label :for="'service-' + index" class="service-label">
            {{ service }}
          </label>
        </li>
      </ul>

      <div class="button-group">
        <button @click="goToHomepage">
          <svg
            width="100"
            height="101"
            viewBox="0 0 100 101"
            fill="none"
            class="back-button">
            <path
              d="M50 100.306C22.379 100.306 0 77.9266 0 50.3057C0 22.6847 22.379 0.305664 50 0.305664C77.621 0.305664 100 22.6847 100 50.3057C100 77.9266 77.621 100.306 50 100.306ZM73.3871 41.4347H50V27.1403C50 24.9831 47.379 23.8944 45.8669 25.4266L22.8226 48.592C21.875 49.5395 21.875 51.0516 22.8226 51.9992L45.8669 75.1645C47.3992 76.6968 50 75.6081 50 73.4508V59.1766H73.3871C74.7177 59.1766 75.8064 58.0879 75.8064 56.7573V43.854C75.8064 42.5234 74.7177 41.4347 73.3871 41.4347Z"
              fill="currentColor" />
          </svg>
        </button>

        <button :disabled="!selectedService" @click="goToStep2">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            class="next-button">
            <path
              d="M50 0C77.621 0 100 22.379 100 50C100 77.621 77.621 100 50 100C22.379 100 0 77.621 0 50C0 22.379 22.379 0 50 0ZM26.6129 58.871H50V73.1653C50 75.3226 52.621 76.4113 54.1331 74.879L77.1774 51.7137C78.125 50.7661 78.125 49.254 77.1774 48.3065L54.1331 25.121C52.6008 23.5887 50 24.6774 50 26.8347V41.129H26.6129C25.2823 41.129 24.1936 42.2177 24.1936 43.5484V56.4516C24.1936 57.7823 25.2823 58.871 26.6129 58.871Z"
              fill="currentColor" />
          </svg>
        </button>
      </div>

      <div class="progress-bar">
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step"></div>
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
  "Ledmobilisering",
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
  overflow: hidden;
}

.image-container {
  width: 30%;
}

.booking-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin: 0 10px 2rem 10px;
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
  background-color: #f7a941;
  border-color: #f7a941;
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
  justify-content: space-evenly;
}

.back-button {
  color: #aaaaaa;
}

.next-button {
  color: #f7a941;
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

button:disabled .next-button {
  color: #aaaaaa;
  cursor: not-allowed;
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
