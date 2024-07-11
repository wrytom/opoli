<template>
  <div class="menu-container">
    <a href="#" class="menu-button" @click.prevent="toggleMenu">Меню</a>
    <transition name="slide-fade">
      <div class="menu" v-if="isMenuOpen">
        <a href="#hero" @click="closeMenu">Начало</a>
        <a href="#services" @click="closeMenu">Услуги</a>
        <a href="#about" @click="closeMenu">За нас</a>
        <a href="#contact" @click="closeMenu">Контакт</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.menu-container {
  position: relative;
  display: inline-block;
}

.menu-button {
  width: max-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  backdrop-filter: blur(13px);
  background-color: rgba(13, 13, 13, 0.5);
  color: white;
   transition: all 0.3s ease;
}

  .menu-button:hover {
  background-color: rgb(13,13,13,0.4);
  scale: 0.97;
  transition: all 0.3s ease;
}

.menu {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 10px;
  background-color: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(13px);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.3s;
}

.menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

@media screen and (max-width: 768px) {
    .menu-button {
      font-size: 0.9rem;
    }
}

</style>
