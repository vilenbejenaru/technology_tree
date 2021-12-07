<template>
  <div>
    <section-main
      msg="С помощью нашего сайта вы пройдёте пути от новичка до профессионала. Здесь будет находится вся доступная информаци которая поможет вам стать фронтенд разработчиком."
    />

  </div>
</template>

<script>
import SectionMain from '../components/Sections/SectionMain.vue';
import UserService from '../services/user.service';

export default {
  name: "Home",
  components: {
    SectionMain,
  },data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped lang="scss">
</style>
