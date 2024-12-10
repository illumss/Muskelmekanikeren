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
        <input type="email" v-model="address" id="address" required />
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

<script>
export default {
  inject: ["updateBookingData", "changeStep", "bookingData"],
  data() {
    return {
      name: this.bookingData.userInfo?.name || "",
      address: this.bookingData.userInfo?.address || "",
      phone: this.bookingData.userInfo?.phone || "",
      isMember: this.bookingData.userInfo?.isMember || false,
    };
  },
  methods: {
    goToStep2() {
      this.changeStep(2); // Navigate back to Step 2
    },
    submitInfo() {
      const userInfo = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        isMember: this.isMember,
      };
      this.updateBookingData("userInfo", userInfo); // Save user info
      this.changeStep(4); // Navigate to confirmation step
    },
  },
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
