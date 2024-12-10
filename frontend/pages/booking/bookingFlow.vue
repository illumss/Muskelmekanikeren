<template>
  <div>
    <component :is="currentStepComponent" />
  </div>
</template>

<script>
import { reactive, provide } from "vue";
import Step1 from "./step1.vue";
import Step2 from "./step2.vue";
import Step3 from "./step3.vue";
import Confirmation from "./confirmation.vue";

export default {
  setup() {
    const bookingData = reactive({
      service: null,
      date: null,
      time: null,
      userInfo: null,
      step: 1, // Step tracker
    });

    const updateBookingData = (key, value) => {
      bookingData[key] = value;
      console.log(`Updated ${key}:`, value); // Debug log
    };

    const changeStep = (step) => {
      bookingData.step = step;
      console.log("Changing step to:", step); // Debug log
    };

    provide("bookingData", bookingData);
    provide("updateBookingData", updateBookingData);
    provide("changeStep", changeStep);

    const currentStepComponent = computed(() => {
      switch (bookingData.step) {
        case 1:
          return Step1;
        case 2:
          return Step2;
        case 3:
          return Step3;
        case 4:
          return Confirmation;
        default:
          return Step1;
      }
    });

    return { currentStepComponent };
  },
};
</script>
