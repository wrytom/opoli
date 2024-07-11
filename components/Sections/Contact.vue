<template>
    <section class="contact" id="contact">
      <div class="contact-line"></div>
      <div class="contact-caption"><p>За да разберете как Ополи може да ви помогне с вашите строителни проекти, свържете се с нас </p>
        <MiscButton style="background-color: rgb(255,255,255,0.5); border-radius: 50px" />
      </div>
      <div class="contact-line"></div>
      <h1 class="contact-title">Ополи</h1>
      <div class="contact-line"></div>
    </section>
</template>

<style scoped>
.contact {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  color: var(--background-color);
  background-color: #1c1c1c;
}

.contact-caption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
}

.contact-caption p {
  text-transform: uppercase;
  width: 35%;
  text-align: center;
  font-size: .9rem;

}

.contact-title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Unbounded", sans-serif;
}

.contact-line {
  height: 100%;
  width: 1px;
  background-color: rgb(218, 218, 218);
}

@media screen and (max-width: 768px) {
  .contact-caption p {
  width: 70%;

}

}

</style>
