<template>
  <footer class="footer-section">
    <div class="contact-container">
      <h2>Kontakt</h2>

      <div class="contact-options">
        <div class="contact-item">
          <p>Send en besked</p>
          <img src="/images/messenger_icon.svg" class="icons" alt="Messenger icon"></img>
          <a class="contact-info" href="https://m.me/muskelmekanikeren" target="_blank"
            >Skriv i Messenger chat</a
          >
        </div>
        <div class="line"></div>
        <div class="contact-item">
          <p>Send en mail</p>
          <img src="/images/mail_icon.svg" class="icons" alt="Mail icon"></img>
          <a class="contact-info" href="mailto:kontakt@muskelmekanikeren.dk">Kontakt@muskelmekanikeren.dk</a>
        </div>
        <div class="line"></div>
        <div class="social-links">
          <p>Find mig på</p>
          <img src="/images/facebook_icon.svg" class="icons" alt="Facebook icon"></img>
          <a class="contact-info" href="https://www.facebook.com/p/Muskelmekanikeren-100057581943834/" target="_blank"
            >Facebook</a
          >
          <img src="/images/instagram_icon.svg" class="icons" alt="Instagram icon"></img>
          <a class="contact-info" href="https://instagram.com/muskelmekanikeren" target="_blank"
            >Instagram</a
          >
        </div>
      </div>
    </div>

    <div class="logo-container">
      <img
        src="/images/logo_orange.svg"
        alt="Muskel Mekanikeren Logo"
        class="logo" />
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #233D4D;
  padding: 2rem;
  color: #ffffff;
  font-family: "Arial", sans-serif;
}

.contact-container {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: x-small;
  margin-bottom: 1.5rem;
  font-weight: normal;
  margin-left: 4rem;
}

.line {
  border-bottom: 1px solid white;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

p {
  font-size: x-small;
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
  color: #F7A941;
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
  color: #F7A941;
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
</style>
