<template>
  <SecondHeader />
  <div class="step-two-page">
    <div class="image-container">
      <img
        src="/public/images/booking-pic.png"
        alt="Booking"
        class="booking-pic" />
    </div>

    <div class="booking-container">
      <h1>Vælg en dato og tidspunkt</h1>

      <div class="calendar-navigation">
        <button @click="changeMonth(-1)" class="nav-button">&#8592;</button>
        <h4>{{ currentMonthName }} {{ currentYear }}</h4>
        <button @click="changeMonth(1)" class="nav-button">&#8594;</button>
      </div>

      <div class="calendar-grid">
        <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          class="calendar-day">
          <button
            :class="{
              selected:
                selectedDate ===
                `${currentYear.value}-${currentMonth.value + 1}-${day}`,
            }"
            :disabled="!isDateEnabled(day)"
            @click="selectDate(day)">
            {{ day }}
          </button>
        </div>
      </div>

      <div v-if="availableTimes.length" class="available-times">
        <h4 class="second-title">Ledige tider for {{ formatSelectedDate }}</h4>
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
              class="time-input"
              :checked="selectedTime === time" />
            <label :for="`time-${index}`" class="time-label">{{ time }}</label>
          </li>
        </ul>
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
        <button :disabled="!selectedDate || !selectedTime" @click="goToStep3">
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
        <div class="progress-step"></div>
        <div class="space"></div>
        <div class="progress-step"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const { bookingData, updateBookingData, changeStep } = useBooking();
const router = useRouter();

const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());
const selectedDate = ref(bookingData.value?.date || null);
const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return "";

  const date = new Date(selectedDate.value);
  const options = { day: "numeric", month: "long" };
  return date.toLocaleDateString("da-DK", options);
});
const selectedTime = ref(bookingData.value?.time || null);
const availableTimes = ref([]);

const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    "default",
    { month: "long" }
  );
});

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const selectDate = (day) => {
  console.log("Selected day:", day);
  selectedDate.value = `${currentYear.value}-${currentMonth.value + 1}-${day}`;
  fetchAvailableTimes();
};

const fetchAvailableTimes = () => {
  availableTimes.value = ["08:00", "10:00", "12:00", "14:00"];
};

const isDateEnabled = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day);
  const today = new Date();
  const dayOfWeek = date.getDay();

  return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
};

const changeMonth = (delta) => {
  const newMonth = currentMonth.value + delta;
  if (newMonth < 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else if (newMonth > 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value = newMonth;
  }
};

const goBack = () => {
  changeStep(1);
  router.push("/booking/step1");
};

const goToStep3 = () => {
  updateBookingData("date", selectedDate.value);
  updateBookingData("time", selectedTime.value);
  changeStep(3);
  router.push("/booking/step3");
};

onMounted(() => {
  console.log("Step2 mounted, current booking data:", bookingData.value);
});
</script>

<style scoped>
.step-two-page {
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

.booking-container {
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

.calendar-navigation {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.nav-button {
  color: #646464;
  padding: 0;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  align-self: center;
  margin-bottom: 20px;
}

.calendar-day button {
  width: 30px;
  height: 30px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.calendar-day button:hover {
  background: #f7a941;
  color: white;
}
.calendar-day button.selected {
  background: #f7a941;
  color: white;
}

.calendar-day button:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.available-times {
  margin-top: 2rem;
  font-family: "PPNeueMontreal", sans-serif;
}

.second-title {
  margin-bottom: 1.8rem;
}
ul {
  padding: 0;
}

.time-slot {
  margin-bottom: 10px;
  display: inline-block;
  margin: 0 10px;
}

.time-input {
  display: none;
}

.time-label {
  padding: 5px 5px;
  background-color: #f1f1f1;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 1rem;
}

.time-input:checked + .time-label {
  background-color: #f7a941;
  color: white;
}

.time-label:hover {
  background-color: #e2e2e2;
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
