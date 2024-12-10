<template>
  <header class="page-header">
    <img src="/images/header-image.jpg" alt="Clinic Image" class="header-img" />
    <div class="color-overlay"></div>
    <img src="/images/logo_hvid.svg" alt="Clinic Logo" class="header-logo" />
    <div class="header-name">
      <slot name="clinic-name">Dennis Okholm</slot>
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
}
.header-img {
  width: 100%;
  height: 60vh;
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
  top: 10px;
  left: 10px;
  width: 60px;
  height: auto;
  z-index: 2;
}
.header-name {
  position: absolute;
  top: 10px;
  right: 10px;
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
</style>
