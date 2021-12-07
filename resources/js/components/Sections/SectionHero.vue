<template>
   <section  class="section section-header p-5 mt-0 tt-hero">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 text-center">
                        <h1 class="display-2 mb-4">Дерево технологий</h1>
                        <p class="lead mb-5">Пройди обучение современным технологиям!</p>
                        <p class="lead mb-5">Найди свой путь, избегая чужих ошибок!!!</p>
                     <router-link :to="{ name: 'Login' }">
            <base-button class="mt-4"><span class="fas fa-book-reader mr-2"></span>Узнать подробнее</base-button></router-link>
                </div>
            </div>
            </div>

</section>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";

    export default {
  components: { BaseButton },

    }
</script>

<style >
.tt-hero {
  /* background-image: url('/assets/img/ttree/ttree_bg.jpg'); */
}
</style>
