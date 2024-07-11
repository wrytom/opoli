<template>
  <div>
    <a href="#" class="call-button" @click.prevent="toggleBottomSheet">Контакт</a>
    <transition name="fade">
      <div v-if="isBottomSheetVisible" class="overlay" @click="toggleBottomSheet"></div>
    </transition>
    <transition name="bottom-sheet">
      <div v-if="isBottomSheetVisible" class="bottom-sheet">
        <div class="sheet-content">
          <div class="upper">
            <h3>Ополи</h3>
            <button class="close-button" @click="toggleBottomSheet"><i class="pi pi-times"></i></button>
          </div>
          <div class="lower">
            <h2>Свържи се с нас</h2>
            <p class="phone-p">За да разберете как Ополи може да ви помогне с вашите строителни проекти</p>
            <a href="tel:0885381751" class="phone-call"><i class="pi pi-phone"></i>0885381751</a>
            <a href="mailto:hello@opoli.eu" class="phone-call"><i class="pi pi-envelope"></i>Пиши ни Email</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBottomSheetVisible: false,
    };
  },
  methods: {
    toggleBottomSheet() {
      this.isBottomSheetVisible = !this.isBottomSheetVisible;
      this.toggleBodyScroll();
    },
    toggleBodyScroll() {
      document.body.classList.toggle('no-scroll', this.isBottomSheetVisible);
    }
  },
};
</script>

<style scoped>
.call-button {
  width: max-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  backdrop-filter: blur(13px);
  background-color: rgb(13,13,13,0.5);
  color: white;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
.bottom-sheet {
  position: fixed;
  bottom: 2%;
  right: 20px;
  width: 33vw;
  height: max-content;
  background-color: white;
  padding: 1.5rem 2rem 2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 10;
}
.sheet-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.sheet-content .upper,
.sheet-content .lower {
  display: flex;
}
.sheet-content .upper {
  align-items: center;
  justify-content: space-between;
}
.upper h3 {
  color: grey;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: "Unbounded", sans-serif;
}
.sheet-content .lower {
  flex-direction: column;
  gap: .5rem
}
.lower h2,
.lower p {
  color: var(--text-color);
}
.phone-p {
  margin-bottom: 1rem;
}
.close-button {
  cursor: pointer;
  background-color: var(--grey-color);
  border: 0;
  border-radius: 25px;
  padding: 10px;
  font-size: 1rem;
}
.phone-call {
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
}
.phone-call:nth-of-type(1) {
  background-color: var(--text-color);
  color: white;
}
.phone-call:nth-of-type(2) {
  background-color: var(--grey-color);
  color: black;
}
.bottom-sheet-enter-active {
  animation: slideInWobble 1s ease-out;
}
.bottom-sheet-leave-active {
  transition: transform 0.3s ease-in;
}
.bottom-sheet-leave-to {
  transform: translateY(110%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@keyframes slideInWobble {
  0% {
    transform: translateY(110%);
  }
  60% {
    transform: translateY(-5%);
  }
  80% {
    transform: translateY(2%);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .bottom-sheet {
    width: 100%;
    right: 0;
    left: 0;
    bottom: -2%;
    border-radius: 20px 20px 0 0;
  }
  .lower {
    margin-bottom: 20px;
  }
  .call-button {
    font-size: 0.9rem;
  }
  .close-button {
    padding: 8px 10px;
  }
}
</style>

<style>
body.no-scroll {
  overflow: hidden;
}
</style>