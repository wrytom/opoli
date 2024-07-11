<template>
    <div class="about-stack" id="about">
      <div v-for="(card, index) in cards" :key="index" class="about-card" :style="{ backgroundColor: card.color }">
        <div class="half">
          <h1>{{ card.title }}</h1>
        </div>
        <div class="centered-line"></div>
        <div class="half">
          <p v-for="(paragraph, pIndex) in card.paragraphs" :key="pIndex">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Опит и професионализъм',
            paragraphs: [
              'Разполагаме с екип от опитни инженери, архитекти и строители с доказан опит в реализирането на разнообразни проекти',
              'Ние следим последните тенденции и новости в бранша, за да предложим най-добрите решения за вас'
            ],
            color: '#DCDCDC'
          },
          {
            title: 'Качество и надеждност',
            paragraphs: [
              'Работим само с висококачествени материали от реномирани производители и прилагаме съвременни технологии и строителни практики',
              'Така гарантираме дълготрайност, сигурност и енергийна ефективност на всяка сграда, която изграждаме'
            ],
            color: '#C0C0C0'
          },
          {
            title: 'Индивидуален подход',
            paragraphs: [
              'Всеки проект е уникален и заслужава специално внимание. Затова отделяме време, за да разберем вашите конкретни изисквания, предпочитания и бюджет',
              'Предлагаме гъвкави решения и персонализиран подход, за да отговорим на вашите индивидуални нужди'
            ],
            color: '#D3D3D3'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .about-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: sticky;
    top: 0;
  }
  
  .half {
    gap: 1rem;
  }

  .centered-line {
  width: 1px;
  height: 100%;
  background-color: black;
}


@media screen and (max-width: 768px) {
  .about-card {
    flex-direction: column;
  }

  .centered-line {
  display: none;
}

}
  </style>
  