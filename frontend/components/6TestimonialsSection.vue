<template>
  <div class="testimonials-section">
    <h2>Testimonials</h2>
    <div class="testimonial-card">
      <img src="/images/testimonial_1.jpg" alt="Kira Hansen" />
      <h3>Kira Hansen</h3>
      <p>Tandplejer</p>
      <blockquote>
        "Jeg opsøgte Dennis pga. skuldersmerter. Han undersøgte mig grundigt og
        lavede et træningsprogram med progression. Nu er min skulder symptomfri,
        og jeg er stærkere end før. Jeg kan varmt anbefale Dennis."
      </blockquote>
    </div>
    <div class="testimonial-card">
      <img src="/images/testimonial_2.jpg" alt="Jens Jacobsen" />
      <h3>Jens Jacobsen</h3>
      <p>Crossfitter</p>
      <blockquote>
        "Som crossfitter på højt niveau, er det for mig vigtigt med professionel
        behandling. Hos Dennis har jeg modtaget målrettet behandling og fået høj
        faglig vurdering af mine 'skader'."
      </blockquote>
    </div>
    <div class="testimonial-card">
      <img src="/images/testimonial_3.jpg" alt="Maria Eg" />
      <h3>Maria Eg</h3>
      <p>Stud. BSc idræt</p>
      <blockquote>
        "Jeg var i behandling hos Dennis i 4-5 måneder for en ankelskade. Han
        fandt hurtigt den rette behandling og gav mig øvelser til at støtte
        forløbet. I dag har jeg ingen gener og bruger stadig øvelserne."
      </blockquote>
    </div>
  </div>
</template>

<style scoped>
.testimonials-section {
  padding: 3rem;
  text-align: center;
  background-color: #f7f7f7;
}

.testimonial-card {
  background-color: #e8f1f8;
  border-radius: 10px;
  padding: 2rem;
  margin: 1.5rem auto;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.testimonial-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.testimonial-card h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.testimonial-card p {
  font-weight: bold;
  color: #555;
}

blockquote {
  font-style: italic;
  margin: 1rem auto;
  color: #333;
}
</style>
