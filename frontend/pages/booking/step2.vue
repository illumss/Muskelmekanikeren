<template>
  <div class="booking-container">
    <h1>Vælg en dato og tidspunkt</h1>

    <!-- Calendar Navigation -->
    <div class="calendar-navigation">
      <button @click="changeMonth(-1)" class="nav-button">
        &#8592; Previous
      </button>
      <h2>{{ currentMonthName }} {{ currentYear }}</h2>
      <button @click="changeMonth(1)" class="nav-button">Next &#8594;</button>
    </div>

    <!-- Calendar Grid -->
    <div class="calendar-grid">
      <div
        v-for="(day, index) in daysInMonth"
        :key="index"
        class="calendar-day">
        <button
          :class="{ selected: selectedDate === day }"
          :disabled="!isDateEnabled(day)"
          @click="selectDate(day)">
          {{ day }}
        </button>
      </div>
    </div>

    <!-- Available Times -->
    <div v-if="availableTimes.length" class="available-times">
      <h2>Available Times</h2>
      <ul>
        <li
          v-for="(time, index) in availableTimes"
          :key="index"
          class="time-slot">
          <input
            type="radio"
            :id="`time-${index}`"
            :value="time"
            v-model="selectedTime"
            class="time-input" />
          <label :for="`time-${index}`" class="time-label">{{ time }}</label>
        </li>
      </ul>
    </div>

    <!-- Navigation Buttons -->
    <div class="button-group">
      <button @click="goBack" class="back-button">Back</button>
      <button :disabled="!selectedTime" @click="goToStep3" class="next-button">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["updateBookingData", "changeStep", "bookingData"],
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: this.bookingData.date || null,
      selectedTime: this.bookingData.time || null,
      availableTimes: [],
    };
  },
  methods: {
    selectDate(day) {
      this.selectedDate = `${this.currentYear}-${this.currentMonth + 1}-${day}`;
      this.fetchAvailableTimes();
    },
    fetchAvailableTimes() {
      this.availableTimes = ["08:00", "10:00", "12:00", "14:00"];
    },
    goBack() {
      this.changeStep(1); // Navigate to Step 1
    },
    goToStep3() {
      this.updateBookingData("date", this.selectedDate);
      this.updateBookingData("time", this.selectedTime);
      this.changeStep(3); // Navigate to Step 3
    },
  },
};
</script>

<style scoped>
.booking-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 28px;
  color: #4caf50;
  margin-bottom: 20px;
}

.calendar-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.nav-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #0056b3;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.calendar-day button {
  width: 40px;
  height: 40px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.calendar-day button:hover {
  background: #d0d0d0;
}

.calendar-day button.selected {
  background: #007bff;
  color: white;
}

.calendar-day button:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.available-times {
  margin-top: 20px;
}

.time-slot {
  margin-bottom: 10px;
}

.time-input {
  margin-right: 10px;
}

.time-label {
  font-size: 16px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
</style>
