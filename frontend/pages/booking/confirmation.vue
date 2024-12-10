<template>
  <div>
    <h1>Bekræft din booking</h1>
    <p>Service: {{ bookingData.service }}</p>
    <p>Dato: {{ bookingData.date }}</p>
    <p>Tid: {{ bookingData.time }}</p>
    <p>Navn: {{ bookingData.userInfo?.name }}</p>
    <p>Email: {{ bookingData.userInfo?.address }}</p>
    <p>Telefon: {{ bookingData.userInfo?.phone }}</p>
    <p>
      Sygeforsikring Danmark medlem:
      {{ bookingData.userInfo?.isMember ? "Ja" : "Nej" }}
    </p>
    <button @click="submitBooking">Bekræft</button>
  </div>
</template>

<script>
export default {
  inject: ["bookingData"], // Access shared booking data
  methods: {
    async submitBooking() {
      try {
        const response = await this.$axios.post(
          "/api/bookings",
          this.bookingData
        );
        console.log("Booking saved successfully:", response.data);
        alert("Booking bekræftet!");
        this.$router.push("/"); // Redirect to homepage
      } catch (error) {
        console.error("Error saving booking:", error);
        alert("Der opstod en fejl under bekræftelsen af din booking.");
      }
    },
  },
};
</script>
