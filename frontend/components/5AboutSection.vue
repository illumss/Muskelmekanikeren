<template>
  <div class="about-section">
    <h1>Om Muskelmekanikeren</h1>
    <h2 class="about">
      Dennis Okholm har været elitesportsudøver størstedelen af sit liv, og ved
      derfor hvordan det er at have skader og smerter, som begrænser præstation
      eller bevægelse i dagligdagen.
    </h2>
    <img class="about-image" src="/images/weight.png" alt="weight" />
  </div>
</template>

<style scoped>
.about-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 8rem;
  padding-right: 8rem;
  background: #233d4d;
  color: white;
  display: flex;
  flex-direction: column;
}

.about {
  text-align: center;
  z-index: 2;
}

.about-image {
  position: absolute;
  margin-top: 1rem;
  width: 100%;
  max-width: 250px;
  height: auto;
  align-self: flex-end;
  z-index: 1;
}

@media (max-width: 1440px) {
  .about-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  :deep(.about-image) {
    max-width: 200px;
  }
}

@media (max-width: 960px) {
  .about-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  :deep(h1) {
    margin-left: 2rem;
  }

  .about {
    font-size: 1.8rem;
  }

  .about-image {
    margin-top: 2rem;
    max-width: 150px;
  }
}
@media (max-width: 375px) {
  .about {
    font-size: 1.2rem;
  }
  :deep(h1) {
    margin-left: 1rem;
  }

  .about-image {
    margin-top: 0;
    max-width: 180px;
  }
}
</style>
