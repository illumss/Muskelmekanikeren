<template>
  <div class="form-container">
    <h1>Dine informationer</h1>

    <form @submit.prevent="submitInfo">
      <div class="form-group">
        <label for="name">Fulde navn:</label>
        <input type="text" v-model="name" id="name" required />
      </div>

      <div class="form-group">
        <label for="address">Mail:</label>
        <input type="email" v-model="email" id="address" required />
      </div>

      <div class="form-group">
        <label for="phone">Telefon nummer:</label>
        <input type="tel" v-model="phone" id="phone" required />
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="isMember" />
          Sygeforsikring Danmark. Er du medlem, så tjek af her.
        </label>
      </div>

      <div class="button-group">
        <button type="button" class="back-button" @click="goToStep2">
          Back
        </button>
        <button type="submit" class="next-button">Book</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const router = useRouter();
const { bookingData, updateBookingData, changeStep } = useBooking();

// Initialize form data from booking data
const name = ref(bookingData.value?.userInfo?.name || "");
const email = ref(bookingData.value?.userInfo?.email || "");
const phone = ref(bookingData.value?.userInfo?.phone || "");
const isMember = ref(bookingData.value?.userInfo?.isMember || false);

const goToStep2 = () => {
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
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button[type="button"] {
  background-color: #f8f9fa;
  color: #333;
}

button[type="button"]:hover {
  background-color: #e2e6ea;
}
</style>
