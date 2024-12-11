<script setup>
import PageHeader from "~/components/1PageHeader.vue";
import StickyNavbar from "~/components/2StickyNavbar.vue";
import MessageSection from "~/components/3MessageSection.vue";
import PricesSection from "~/components/4PricesSection.vue";
import AboutSection from "~/components/5AboutSection.vue";
import TestimonialsSection from "~/components/6TestimonialsSection.vue";
import GallerySection from "~/components/7GallerySection.vue";
import Footer from "~/components/8Footer.vue";
</script>

<template>
  <div>
    <PageHeader />
    <StickyNavbar />
    <section id="message"><MessageSection /></section>
    <section id="prices"><PricesSection /></section>
    <section id="about"><AboutSection /></section>
    <section id="testimonials"><TestimonialsSection /></section>
    <section id="gallery"><GallerySection /></section>
    <Footer id="contact" />
  </div>
</template>
