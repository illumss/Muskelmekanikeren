// composables/useBooking.ts
import { ref } from "vue";

export const useBooking = () => {
  // Use useState to persist data between route changes
  const bookingData = useState("bookingData", () => ({
    service: null,
    date: null,
    time: null,
    userInfo: null,
    id: null,
  }));

  const currentStep = useState("currentStep", () => 1);

  const updateBookingData = (key: string, value: any) => {
    bookingData.value = {
      ...bookingData.value,
      [key]: value,
    };
    console.log(`Updated ${key}:`, value);
    console.log("Current booking data:", bookingData.value);
  };

  const changeStep = (step: number) => {
    currentStep.value = step;
    console.log("Step changed to:", step);
  };

  const reset = () => {
    bookingData.value = {
      service: null,
      date: null,
      time: null,
      userInfo: null,
      id: null,
    };
    currentStep.value = 1;
  };

  return {
    bookingData,
    currentStep,
    updateBookingData,
    changeStep,
    reset,
  };
};
