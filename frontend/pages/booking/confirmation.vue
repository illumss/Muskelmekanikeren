<template>
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
      <button @click="goToStep3" class="back-button">Tilbage</button>
      <button @click="submitBooking" class="confirm-button">Bekræft</button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const { bookingData, reset } = useBooking();

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("da-DK");
};

const goToStep3 = () => {
  router.push("/booking/step3");
};

const submitBooking = async () => {
  try {
    // put request with id as param
    const response = await useFetch(
      `http://localhost:5000/api/bookings/${bookingData.value.id}`,
      {
        method: "PUT",
        body: bookingData.value,
      }
    );

    console.log("Booking saved successfully:", response);
    alert("Booking bekræftet!");

    // Reset booking state and redirect to homepage
    reset();
    router.push("/");
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Der opstod en fejl under bekræftelsen af din booking.");
  }
};

// Validate required data on mount
</script>

<style scoped>
.confirmation-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #4caf50;
  margin-bottom: 30px;
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

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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

.confirm-button {
  background-color: #28a745;
  color: white;
}

.confirm-button:hover {
  background-color: #218838;
}
</style>
