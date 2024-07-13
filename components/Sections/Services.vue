<template>
    <section class="services" id="services">
      <div class="half sticky">
        <p>Услуги</p>
        <h1 class="title">Вие сте на правилното място</h1>
      </div>
      <div class="centered-line"></div>
      <div class="half services-list">
        <h2>
          Ополи е вашият надежден партньор за всички видове строително-монтажни работи. <br> <br>
          Ние предлагаме цялостно обслужване от проектиране до изпълнение, като гарантираме високо качество, спазване на сроковете и конкурентни цени.
        </h2>
  
        <MiscInfoBox title="Демонтаж" caption="Изготвяне на подробни проекти за жилищни, обществени и промишлени сгради, съобразени с вашите изисквания и предпочитания"/>
        <MiscInfoBox title="Строителство" caption="Изпълнение на всички видове строителни работи – груб строеж, довършителни работи, реконструкции, ремонти" />
        <MiscInfoBox title="Монтаж" caption="Монтаж на ВиК, ОВК, електроинсталации, слаботокови инсталации, асансьори, ескалатори и други." />
        <MiscInfoBox title="Специализирани дейности" caption="Изкопни работи, хидроизолации, топлоизолации, зидарии, мазилки, шпакловки, боядисване, облицовки и други" />
        <MiscInfoBox title="Консултации" caption="Професионални консултации и технически надзор по време на целия процес на строителство" />
      </div>
    </section>
  </template>
  
  <style scoped>
  .services {
    position: relative;
    height: max-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .centered-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background-color: black;
  z-index: 30;
}
  
  .sticky {
    position: -webkit-sticky; 
    position: sticky;
    top: 5%; 
    align-self: flex-start; 
    gap:0.5rem;
  }
  
  .services-list {
    gap: 2rem;
    padding: 5rem;
  }
  
  .half h1 {
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 3rem;
  }
  
  .half h2 {
    font-weight: 300;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    .services {
    flex-direction: column;
  }

  .centered-line {
  display: none;
}

.sticky { 
    position: relative;
    align-self: center; 
  }

  .services-list {
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .half h1 {
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 2rem;
  }

}
  </style>
  
