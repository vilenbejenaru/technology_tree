<template>
    <landing-layout>
        <h2>Admin Page auth</h2>
<h3>{{content}}</h3>
    </landing-layout>
</template>


<script>
import LandingLayout from "../../Layouts/LandingLayout.vue";
import UserService from '../../services/user.service';


export default {
    name: 'AdminPage',
    components: { LandingLayout },
      data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
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
