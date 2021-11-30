<template>
   <section class="accordion" id="accordionExample">
       <h2>Дерево технологий в вопросах и ответах</h2>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Кто будет меня учить?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Вы проходите все обучение самостоятельно.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Я Получу диплом после обучения?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
       Обычно, после завершения обучения,слушатели не получаю диплом. Но есть ресурсы, которые могут предоставить диплом после обучения.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Сколько времени займет обучение?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
       Все зависит от выбранного направления и желаемого результата. Никаких ограничений нет - обучаться можно в удобное время, нагрузку можно регулировать.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Какое качество обучения?
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
       Качество обучения постоянно поддерживается на высоком уровне. Вы будете изучать только важные и актуальные темы по выбранным направлениям
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFive">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Зачем мне это, я читаю документацию...
        </button>
      </h2>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div class="card-body">
       Всегда читать документацию - это правильно. Наш проект не обладает исчерпывающей информацией по IT-технологиям, он лишь рекомендует полезные и актуальные ресурсы по определенным направлениям
      </div>
    </div>
  </div>

  <a class="btn btn-primary btn-lg" href="#" role="button">Остались вопросы?</a>
</section>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.btn-primary {
    margin: 20px 0;
}

</style>
