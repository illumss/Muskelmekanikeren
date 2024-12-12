<template>
  <SecondHeader />
  <div class="step-four-page">
    <div class="image-container">
      <img
        src="/public/images/booking-pic.png"
        alt="Booking"
        class="booking-pic" />
    </div>

    <div class="confirmation-container">
      <h1>Bekræft din booking</h1>
      <div class="booking-details">
        <p><strong>Service:</strong> {{ bookingData?.service }}</p>
        <p><strong>Dato:</strong> {{ formatDate(bookingData?.date) }}</p>
        <p><strong>Tid:</strong> {{ bookingData?.time }}</p>
        <p><strong>Navn:</strong> {{ bookingData?.userInfo?.name }}</p>
        <p><strong>Email:</strong> {{ bookingData?.userInfo?.email }}</p>
        <p><strong>Telefon:</strong> {{ bookingData?.userInfo?.phone }}</p>
        <p>
          <strong>Sygeforsikring Danmark medlem:</strong>
          {{ bookingData?.userInfo?.isMember ? "Ja" : "Nej" }}
        </p>
      </div>
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
        <button @click="submitBooking" class="confirm-button">Bekræft</button>
      </div>
      <div class="progress-bar">
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step filled"></div>
        <div class="space"></div>
        <div class="progress-step filled"></div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <h2>Du har booket {{ bookingData.service }}</h2>
      <p>
        Den {{ formatDate(bookingData.date) }} klokken {{ bookingData.time }}
      </p>
      <p>Hos Dennis Okholm. Blegbanken 7100.</p>
      <br />
      <p>Du vil modtage en bekræftelse på din email.</p>
      <p>Tak fordi du valgte Muskelmekanikeren.</p>
      <div class="button-container">
        <button class="close-button" @click="redirectToHome">
          Tilbage til forsiden
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const router = useRouter();
const { bookingData, reset } = useBooking();

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("da-DK");
};

const showModal = ref(false);

const goBack = () => {
  changeStep(3);
  router.push("/booking/step3");
};

const submitBooking = async () => {
  try {
    const response = await useFetch(
      `http://localhost:5000/api/bookings/${bookingData.value.id}`,
      {
        method: "PUT",
        body: bookingData.value,
      }
    );

    console.log("Booking saved successfully:", response);
    showModal.value = true;
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Der opstod en fejl under bekræftelsen af din booking.");
  }
};

const redirectToHome = () => {
  reset();
  router.push("/");
};
</script>

<style scoped>
.step-four-page {
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
.confirmation-container {
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

.booking-details {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.booking-details p {
  margin: 10px 0;
  font-size: 16px;
}

.confirm-button {
  padding: 10px 20px;
  background-color: #f7a941;
  color: white;
  border: none;
  font-size: medium;
  font-weight: bold;
  font-family: "Manrope", sans-serif;
  border-radius: 30px;
  width: 6rem;
}

.button-group {
  display: flex;
  justify-content: space-evenly;
}

.back-button {
  color: #aaaaaa;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal p {
  margin: 10px 0;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.close-button {
  width: 50%;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #233d4d;
  color: white;
  border: none;
  font-weight: bold;
  font-family: "Manrope", sans-serif;
  border-radius: 20px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #1a2d3a;
}
</style>
