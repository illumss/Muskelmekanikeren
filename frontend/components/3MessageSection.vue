<template>
  <div class="message-section">
    <h1>Mission</h1>
    <div class="message-container">
      <div class="first-box">
        <h2>
          Jeg hjælper dig med at overkomme begrænsende smerter og forbedre din
          præstation.
        </h2>
        <img src="/images/fitness-photo.png" alt="Fitness" />
      </div>

      <div class="second-box">
        <img src="/images/clinic-photo.png" alt="Clinic" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-section {
  background-color: #e0eaef;
  padding: 5rem;
}

.message-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
}
</style>
