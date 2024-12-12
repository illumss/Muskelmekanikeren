<template>
  <SecondHeader />
  <div class="step-three-page">
    <div class="image-container">
      <img
        src="/public/images/booking-pic.png"
        alt="Booking"
        class="booking-pic" />
    </div>

    <div class="form-container">
      <h1>Dine informationer</h1>

      <form @submit.prevent="submitInfo">
        <div class="form-group">
          <label for="name">Fulde navn</label>
          <input
            type="text"
            v-model="name"
            id="name"
            placeholder="Indtast dit fulde navn"
            required />
        </div>

        <div class="form-group">
          <label for="email">Mail</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Indtast din email"
            required />
        </div>

        <div class="form-group">
          <label for="phone">Telefon nummer</label>
          <input
            type="tel"
            v-model="phone"
            id="phone"
            placeholder="Indtast dit telefonnummer"
            required />
        </div>

        <div class="form-group">
          <label for="member">Medlem af Sygeforsikring Danmark</label>
          <label class="toggle toggle-group">
            <input type="checkbox" v-model="isMember" id="member" />
            <span class="slider"></span>
          </label>
        </div>
      </form>
      <div class="button-group">
        <button @click="goBack">
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
        <button type="submit" :disabled="!isFormValid" @click="submitInfo">
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
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const router = useRouter();
const { bookingData, updateBookingData, changeStep } = useBooking();

const name = ref(bookingData.value?.userInfo?.name || "");
const email = ref(bookingData.value?.userInfo?.email || "");
const phone = ref(bookingData.value?.userInfo?.phone || "");
const isMember = ref(bookingData.value?.userInfo?.isMember || false);

// Computed property to validate input fields
const isFormValid = computed(() => {
  return (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    phone.value.trim() !== ""
  );
});

const goBack = () => {
  changeStep(2);
  router.push("/booking/step2");
};

const submitInfo = async () => {
  const userInfo = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    isMember: isMember.value,
  };
  updateBookingData("userInfo", userInfo);
  changeStep(4);
  router.push("/booking/confirmation");
};
</script>

<style scoped>
.step-three-page {
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
.form-container {
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

.form-group {
  width: 60%;
  margin-bottom: 1.5rem;
  text-align: left;
  margin: 0 auto 1.5rem auto;
}

label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: "PPNeueMontreal", sans-serif;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: "PPNeueMontreal", sans-serif;
}

.toggle-group {
  display: flex;
  align-items: center;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin-right: 0.5rem;
  margin-bottom: 0;
}

.toggle input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 25px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #233d4d;
}

input:checked + .slider:before {
  transform: translateX(25px);
}

.note {
  font-size: 0.8rem;
  color: #757575;
  font-family: "PPNeueMontreal", sans-serif;
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
