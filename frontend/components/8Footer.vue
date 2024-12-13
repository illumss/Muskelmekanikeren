<template>
  <footer class="footer-section">
    <div class="contact-container">
      <h1>Kontakt</h1>

      <div class="contact-options">
        <div class="contact-item">
          <p>Send en besked</p>
          <a
            class="contact-info"
            href="https://m.me/muskelmekanikeren"
            target="_blank">
            <img
              src="/images/messenger_icon.svg"
              class="icons"
              alt="Messenger icon"
          /></a>
          <a
            class="contact-info"
            href="https://m.me/muskelmekanikeren"
            target="_blank"
            >Skriv i Messenger chat</a
          >
        </div>
        <div class="line"></div>
        <div class="contact-item">
          <p>Send en mail</p>
          <a class="contact-info" href="mailto:kontakt@muskelmekanikeren.dk"
            ><img src="/images/mail_icon.svg" class="icons" alt="Mail icon"
          /></a>
          <a class="contact-info" href="mailto:kontakt@muskelmekanikeren.dk"
            >Kontakt@muskelmekanikeren.dk</a
          >
        </div>
        <div class="line"></div>
        <div class="social-links">
          <p>Find mig på</p>
          <a
            class="contact-info"
            href="https://www.facebook.com/p/Muskelmekanikeren-100057581943834/"
            target="_blank">
            <img
              src="/images/facebook_icon.svg"
              class="icons"
              alt="Facebook icon" />
          </a>
          <a
            class="contact-info"
            href="https://www.facebook.com/p/Muskelmekanikeren-100057581943834/"
            target="_blank"
            >Facebook</a
          >
          <a
            class="contact-info"
            href="https://instagram.com/muskelmekanikeren"
            target="_blank">
            <img
              src="/images/instagram_icon.svg"
              class="icons"
              alt="Instagram icon"
          /></a>
          <a
            class="contact-info"
            href="https://instagram.com/muskelmekanikeren"
            target="_blank"
            >Instagram</a
          >
        </div>
      </div>
    </div>

    <div class="logo-container">
      <a href="/">
        <img
          src="/images/logo_orange.svg"
          alt="Muskel Mekanikeren Logo"
          class="logo"
      /></a>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #233d4d;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 8rem;
  padding-right: 8rem;
  color: #ffffff;
  font-family: "Arial", sans-serif;
}

.contact-container {
  display: flex;
  flex-direction: column;
}

.line {
  border-bottom: 1px solid white;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
h1 {
  margin-bottom: 2rem;
}

p {
  font-size: small;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

.contact-item a {
  margin-right: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info {
  font-size: xx-large;
}

.contact-item a:hover {
  color: #f7a941;
}

.messenger-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
}

.social-links a {
  margin-right: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #f7a941;
}

.logo-container {
  text-align: center;
}

.icons {
  width: 24px;
  height: 24px;
  display: inline-block;
  padding-right: 1.5rem;
}

.logo {
  width: 400px;
  margin-bottom: 0.5rem;
}

@media (max-width: 1440px) {
  .footer-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (max-width: 960px) {
  .footer-section {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  :deep(h1) {
    margin-left: 2rem;
  }

  :deep(.logo-container) {
    margin-top: 2rem;
    text-align: center;
  }

  :deep(.contact-options) {
    gap: 1rem;
  }

  :deep(.contact-info) {
    font-size: medium;
    margin: 0;
  }
  :deep(.icons) {
    width: 20px;
    height: 20px;
    padding: 0;
  }
  :deep(.logo) {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 375px) {
  :deep(h1) {
    margin-left: 1rem;
  }

  :deep(.logo) {
    width: 300px;
  }

  :deep(.icons) {
    width: 20px;
    height: 20px;
    padding: 0;
  }

  :deep(.contact-info) {
    font-size: medium;
  }
}
</style>
