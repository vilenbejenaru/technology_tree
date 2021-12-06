<template>
   <section class=" section section-lg pt-0 mt-4 pb-4 accordion text-center " id="accordionExample">

       <h2>Дерево технологий в вопросах и ответах</h2>

                  <div class="accordion container shadow-soft rounded mt-3 p-3" id="accordionExample1">
                    <div class="card card-sm card-body bg-primary border-light mb-0">
                        <a href="#panel-1" data-target="#panel-1" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                            <span class="h6 mb-0 font-weight-bold">Кто будет меня учить?</span>
                            <span class="icon"><span class="fas fa-plus"></span></span>
                        </a>
                        <div class="collapse" id="panel-1">
                            <div class="pt-3">
                                <p class="mb-0">
                                  Вы проходите все обучение самостоятельно.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-sm card-body bg-primary border-light mb-0">
                        <a href="#panel-2" data-target="#panel-2" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                            <span class="h6 mb-0 font-weight-bold">Я Получу диплом после обучения?</span>
                            <span class="icon"><span class="fas fa-plus"></span></span>
                        </a>
                        <div class="collapse" id="panel-2">
                            <div class="pt-3">
                                <p class="mb-0">
                                Обычно, после завершения обучения,слушатели не получаю диплом. Но есть ресурсы, которые могут предоставить диплом после обучения.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-sm card-body bg-primary border-light mb-0">
                        <a href="#panel-3" data-target="#panel-3" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                            <span class="h6 mb-0 font-weight-bold">      Какое качество обучения?</span>
                            <span class="icon"><span class="fas fa-plus"></span></span>
                        </a>
                        <div class="collapse" id="panel-3">
                            <div class="pt-3">
                                <p class="mb-0">
                               Качество обучения постоянно поддерживается на высоком уровне. Вы будете изучать только важные и актуальные темы по выбранным направлениям</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-sm card-body bg-primary border-light mb-0">
                        <a href="#panel-4" data-target="#panel-4" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                            <span class="h6 mb-0 font-weight-bold">Зачем мне это, я читаю документацию...</span>
                            <span class="icon"><span class="fas fa-plus"></span></span>
                        </a>
                        <div class="collapse" id="panel-4">
                            <div class="pt-3">
                                <p class="mb-0">
                                  Всегда читать документацию - это правильно. Наш проект не обладает исчерпывающей информацией по IT-технологиям, он лишь рекомендует полезные и актуальные ресурсы по определенным направлениям</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-sm card-body bg-primary border-light mb-0">
                        <a href="#panel-5" data-target="#panel-5" class="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                            <span class="h6 mb-0 font-weight-bold">     Сколько времени займет обучение?</span>
                            <span class="icon"><span class="fas fa-plus"></span></span>
                        </a>
                        <div class="collapse" id="panel-5">
                            <div class="pt-3">
                                <p class="mb-0">
                                 Все зависит от выбранного направления и желаемого результата. Никаких ограничений нет - обучаться можно в удобное время, нагрузку можно регулировать. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link :to="{ name: '' }" class="">
            <base-button class="mt-4">Остались вопросы?</base-button></router-link>




</section>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";
export default {
    components: { BaseButton },
};
</script>

<style scoped>

</style>
