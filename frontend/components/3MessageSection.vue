<template>
  <div class="message-section">
    <h1>Mission</h1>
    <div class="message-container">
      <div class="first-box">
        <h2>
          Jeg hjælper dig med at overkomme begrænsende smerter og forbedre din
          præstation.
        </h2>
        <img src="/images/fitness-photo.png" alt="Fitness" class="shown" />
      </div>

      <div class="second-box">
        <img src="/images/clinic-photo.png" alt="Clinic" class="hidden" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-section {
  background-color: #e0eaef;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 8rem;
  padding-right: 8rem;
}

.message-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
}

img {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
  max-height: 900px;
}

@media (max-width: 1440px) {
  .message-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  :deep(.message-container) {
    gap: 4rem;
  }
}

@media (max-width: 960px) {
  .message-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  :deep(h1) {
    margin-left: 2rem;
  }

  :deep(.message-container) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  :deep(.first-box h2) {
    font-size: 1.5rem;
  }

  :deep(.shown) {
    max-width: 100%;
    max-height: none;
  }

  :deep(.hidden) {
    display: none;
  }

  :deep(.message-section) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (max-width: 375px) {
  :deep(h1) {
    margin-left: 1rem;
  }
}
</style>
