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
  padding: 5rem;
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
</style>
