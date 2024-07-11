<template>
  <header>
    <nav>
     <MiscMenuButton />
      <MiscButton v-if="!inContactSection" />
    </nav>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    inContactSection: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  gsap.fromTo("nav", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    delay: 3
  });

  }
};
</script>
  
  <style scoped>
  header {
    position: fixed;
    width: 100vw;
    z-index: 2;
    padding: 2rem 5rem;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    header {
      padding: 1.5rem 1rem;
    }

}


  </style>
  
 
  
