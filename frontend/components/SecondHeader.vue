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
  height: 15vh;
  object-fit: cover;
}
.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97%;
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
</style>
