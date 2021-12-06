<template>
  <main class="main">
    <h1 class="main__text">{{ msg }}</h1>
    <div class="buttons">
      <base-button><router-link to="/frontend" class="front__btn">Frontend</router-link></base-button>
      <base-button><router-link to="/backend" class="back__btn">Backend</router-link></base-button>
    </div>
  </main>

</template>

<script>
import BaseButton from "../Base/BaseButton.vue";

export default {
  name: "SectionMain",
  components: {
    BaseButton,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  background: url('/assets/img/ttree/ttree_bg.jpg') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
  .main__text {
    position: relative;
    top: 250px;
    right: 16px;
    width: 400px;
    margin: 0 auto;
    text-align: justify;
    font-size: 22px;
    line-height: 22px;
  }

  .buttons {
    position: relative;
    top: 31%;
    right: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    border-radius: 4px;
  }

</style>
