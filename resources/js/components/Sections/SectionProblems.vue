<template>
    <section class="section section-lg pt-0 mt-4 pb-4  d-flex flex-column align-items-center">
        <h2 class="text-center">Что Вы получаете</h2>
        <div class="container d-flex flex-wrap">
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div class="card bg-primary shadow-inset border-light p-4">
                    <!-- Header -->
                    <header
                        class="card-header shadow-soft text-center border border-light rounded mb-4"
                    >
                        <span class="d-block">
                            <span class="display-5 font-weight-bold">
                                Освоение новых IT-технологий</span
                            >
                        </span>
                    </header>
                    <!-- End Header -->
                    <!-- Content -->
                    <div
                        class="card-body shadow-soft text-center border border-light rounded"
                    >
                        <p>
                            Java, C#, PHP, JavaScript, Python, Go, Swift,
                            Objective-C, Android, iOS, React Native, Angular.js,
                            React.js, Vue.js
                        </p>
                    </div>
                    <!-- End Content -->
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div class="card bg-primary shadow-inset border-light p-4">
                    <!-- Header -->
                    <header
                        class="card-header shadow-soft text-center border border-light rounded mb-4"
                    >
                        <span class="d-block">
                            <span class="display-5 font-weight-bold">
                                Экономия времени и средств</span
                            >
                        </span>
                    </header>
                    <!-- End Header -->
                    <!-- Content -->
                    <div
                        class="card-body shadow-soft text-center border border-light rounded"
                    >
                        <p>
                            Новые методы обучения позволяют быстро освоить
                            выбранную предметную область
                        </p>
                    </div>
                    <!-- End Content -->
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div class="card bg-primary shadow-inset border-light p-4">
                    <!-- Header -->
                    <header
                        class="card-header shadow-soft text-center border border-light rounded mb-4"
                    >
                        <span class="d-block">
                            <span class="display-5 font-weight-bold">
                                Доступные материалы обучения
                            </span>
                        </span>
                    </header>
                    <!-- End Header -->
                    <!-- Content -->
                    <div
                        class="card-body shadow-soft text-center border border-light rounded"
                    >
                        <p>
                            Все материалы обучения, ссылки и интернет-ресурсы
                            находятся в свободном доступе
                        </p>
                    </div>
                    <!-- End Content -->
                </div>
            </div>

        </div>
        <base-button class="mt-4"><router-link to="/login">
            Войти в IT</router-link>
        </base-button>
    </section>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";

export default {
    components: { BaseButton },
};
</script>

<style lang="scss" scoped></style>
