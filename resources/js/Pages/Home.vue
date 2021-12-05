<template>
  <div>
    <MainText
      msg="С помощью нашего сайта вы пройдёте пути от новичка до профессионала. Здесь будет находится вся доступная информаци которая поможет вам стать фронтенд разработчиком."
    />
    <!-- <div class="accordion">
      <MyAccordion>
        <template v-slot:title>
          <span class="accordion__title">Accordion 1</span>
          <span class="icon"><fa icon="plus" /></span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit.
            Quia, porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </MyAccordion>
      <MyAccordion>
        <template v-slot:title>
          <span class="accordion__title">Accordion 2</span>
          <span class="icon"><fa icon="plus" /></span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit.
            Quia, porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </MyAccordion>
    </div>
    <MyCard />
    <MyCard />
    <MyCard /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainText from "../components/MainText.vue";

export default {
  name: "Home",
  components: {
    MainText,
  },
};
</script>
<style scoped lang="scss">
</style>
