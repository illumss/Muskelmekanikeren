<template>
  <header class="page-header">
    <img src="/images/header-image.jpg" alt="Clinic Image" class="header-img" />
    <div class="color-overlay"></div>
    <a href="/">
      <img src="/images/logo_hvid.svg" alt="Clinic Logo" class="header-logo" />
    </a>
    <div class="header-name">
      <a href="/">
        <slot name="clinic-name">Dennis Okholm</slot>
      </a>
    </div>
    <img
      src="/images/muskelmekanikeren.png"
      alt="Clinic Name"
      class="header-text" />
  </header>
</template>

<style scoped>
.page-header {
  position: relative;
  text-align: center;
  color: white;
  height: 80vh;
  overflow: hidden;
}

.header-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8dc8e2;
  opacity: 0.4;
  z-index: 1;
}

.header-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
  height: auto;
  z-index: 2;
}

.header-name {
  position: absolute;
  top: 40px;
  right: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  z-index: 2;
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 80%;
}

a {
  color: white;
  text-decoration: none;
}

@media (max-width: 1440px) {
  .page-header {
    height: 60vh;
  }
  :deep(.header-logo) {
    width: 60px;
  }
  :deep(.header-name) {
    font-size: 1.2rem;
  }
  :deep(.header-text) {
    max-width: 70%;
  }
}

@media (max-width: 960px) {
  .page-header {
    height: 50vh;
  }
  :deep(.header-logo) {
    top: 10px;
    left: 10px;
    width: 50px;
  }
  :deep(.header-name) {
    top: 30px;
    right: 10px;
    font-size: 1rem;
  }
}

@media (max-width: 375px) {
  .page-header {
    height: 40vh;
  }
  :deep(.header-logo) {
    width: 40px;
  }
  :deep(.header-name) {
    font-size: 0.8rem;
  }
  :deep(.header-text) {
    max-width: 90%;
    font-size: 0.9rem;
  }
}
</style>
