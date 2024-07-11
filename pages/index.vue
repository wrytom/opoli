<template>
  <HeaderNav :inContactSection="inContactSection" />
  <SectionsHero />
  <SectionsServices />
  <SectionsAbout />
  <SectionsContact ref="contactSection" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const inContactSection = ref(false);
const contactSection = ref(null);
let observer;

useHead({
  title: 'Ополи - Начало',
  meta: [
    { charset: 'UTF-8' },
    { name: 'description', content: 'Ополи: Строителство на жилищни и търговски сгради с високо качество, иновативни решения и професионализъм. Изграждаме Вашето бъдеще.' },
    { name: 'keywords', content: 'строителство, строителна фирма, жилищни сгради, търговски сгради, Ополи, Stara Zagora, строителство Стара Загора, строителни услуги, строителни проекти, ново строителство' },
    { property: 'og:title', content: 'Ополи – Вашият надежден партньор в строителството' },
    { property: 'og:description', content: 'Открийте иновациите в строителството с Ополи! Предлагаме цялостни решения за Вашия жилищен или търговски проект – от проектиране до завършване.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://opoli.eu' },
    { rel: 'icon', href: 'https://cdn-icons-png.flaticon.com/512/3522/3522558.png', type: 'image/x-icon' }
  ],
  htmlAttrs: {
    lang: 'bg'
  }
})


onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      inContactSection.value = entry.isIntersecting;
    },
    { threshold: 0.35 }
  );

  if (contactSection.value) {
    observer.observe(contactSection.value.$el);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
