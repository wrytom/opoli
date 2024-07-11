<template>
  <section class="hero" id="hero">
    <div class="background-overlay"></div>
    <div class="line line1"></div>
    <p class="caption">насочени към иновациите</p>
    <div class="line line2"></div>
    <h1 class="title">Ополи</h1>
    <div class="line line3"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  background-image: url('assets/images/bg.webp');
  background-attachment: fixed;
  background-size: cover;
}
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
}
.caption, .title, .line {
  position: relative;
  z-index: 2;
}
.caption {
  text-transform: uppercase;
  opacity: 0;
}
.title {
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Unbounded", sans-serif;
  opacity: 0;
}
.line {
  height: 0;
  width: 1px;
  background-color: rgb(0, 0, 0);
  opacity: 0;
}
@media screen and (max-width: 768px) {
  .hero {
    background-size: 300%;
    background-attachment: fixed;
  }
  .title {
    font-weight: 600;
    font-size: 4rem;
  }
}
</style>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    requestAnimationFrame(() => {
      gsap.timeline()
        .to(".line1", { height: '100%', duration: 1.2, opacity: 1 })
        .to(".caption", { opacity: 1, duration: 0.75 }, '-=0.25')
        .to(".line2", { height: '100%', duration: 0.75, opacity: 1 }, '-=0.25')
        .to(".title", { opacity: 1, duration: 0.75 }, '-=0.25') 
        .to(".background-overlay", { 
          opacity: 0, 
          duration: 0.75, 
          onComplete: () => {
            gsap.set(".background-overlay", { display: "none" });
          }
        }, '-=0.25') 
        .to(".line3", { height: '100%', duration: 0.75, opacity: 1 }, '-=0.5');
    });
  }
}
</script>
