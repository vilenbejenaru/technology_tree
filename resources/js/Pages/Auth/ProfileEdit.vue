
<template>
        <div class="container">
            <div class="main-body">
                <!-- Breadcrumb -->
                <nav
                    aria-label="breadcrumb"
                    class="main-breadcrumb bg-primary shadow-soft border-light mt-4"
                >
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="javascript:void(0)">{{
                                currentUser.username
                            }}</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Редактирование профиля
                        </li>
                    </ol>
                </nav>
                <!-- /Breadcrumb -->

                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div
                            class="card bg-primary shadow-soft border-light text-center py-4 mb-5"
                        >
                            <div class="card-body">
                                <div
                                    class="d-flex flex-column align-items-center text-center"
                                >
                                    <img
                                        src="/assets/img/team/team2.png"
                                        alt="Admin"
                                        class="rounded-circle"
                                        width="150"
                                    />
                                    <div class="mt-3">
                                        <h4>Андрей</h4>

                                        <p class="text-grey mb-1">
                                            Фронтенд разработчик
                                        </p>
                                        <p class="text-muted font-size-sm">
                                            Москва, Россия
                                        </p>
                                        <p>
                                            <strong>Email:</strong>
                                            {{ currentUser.email }}
                                        </p>
                                        <strong>Разрешения:</strong>
                                        <ul>
                                            <p>Администратор</p>
                                            <li
                                                v-for="(
                                                    role, index
                                                ) in currentUser.roles"
                                                :key="index"
                                            >
                                                {{ role }}
                                            </li>
                                        </ul>
                                        <base-button class="mt-4"
                                            ><router-link to="#">
                                                Выбрать путь</router-link
                                            >
                                        </base-button>
                                        <base-button class="mt-4"
                                            ><router-link to="#">
                                                Написать</router-link
                                            >
                                        </base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="card mt-3 bg-primary shadow-soft border-light text-center text-gray py-4 mb-5"
                        >
                            <ul class="list-group list-group-flush">
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                >
                                    <a
                                        href="https://dribbble.com/TechTree"
                                        target="_blank"
                                        class="btn btn-icon-only btn-pill btn-primary"
                                        aria-label="dribbble social link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Follow us on Dribbble"
                                    >
                                        <span
                                            aria-hidden="true"
                                            class="fab fa-dribbble"
                                        ></span>
                                    </a>
                                    <h6 class="mb-0">Website</h6>
                                    <span class="text-gray"
                                        >https:// Lestaber .com</span
                                    >
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                >
                                    <a
                                        href="https://github.com/TechTree"
                                        target="_blank"
                                        class="btn btn-icon-only btn-pill btn-primary"
                                        aria-label="github social link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Open source projects"
                                    >
                                        <span
                                            aria-hidden="true"
                                            class="fab fa-github"
                                        ></span>
                                    </a>
                                    <h6 class="mb-0">Github</h6>
                                    <span class="text-gray"> Lestaber </span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                >
                                    <a
                                        href="https://twitter.com/TechTree"
                                        target="_blank"
                                        class="btn btn-icon-only btn-pill btn-primary"
                                        aria-label="twitter social link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Follow @TechTree on Twitter"
                                    >
                                        <span
                                            aria-hidden="true"
                                            class="fab fa-twitter"
                                        ></span>
                                    </a>
                                    <h6 class="mb-0">Twitter</h6>
                                    <span class="text-gray">@ Lestaber </span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                >
                                    <a
                                        href="https://instagram.com/TechTree"
                                        target="_blank"
                                        class="btn btn-icon-only btn-pill btn-primary"
                                        aria-label="instagram social link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Follow @TechTree on Twitter"
                                    >
                                        <span
                                            aria-hidden="true"
                                            class="fab fa-instagram"
                                        ></span>
                                    </a>
                                    <h6 class="mb-0">Instagram</h6>
                                    <span class="text-gray"> Lestaber </span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                >
                                    <a
                                        href="https://www.facebook.com/TechTree/"
                                        target="_blank"
                                        class="btn btn-icon-only btn-pill btn-primary"
                                        aria-label="facebook social link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Like @TechTree on Facebook"
                                    >
                                        <span
                                            aria-hidden="true"
                                            class="fab fa-facebook"
                                        ></span>
                                    </a>
                                    <h6 class="mb-0">Facebook</h6>
                                    <span class="text-gray"> Lestaber </span>
                                </li>
                            </ul>
                        </div>
                    </div>


        <div class="col-md-8  bg-primary shadow-soft border-light ">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Настройка профиля</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Имя</label><input type="text" class="form-control" placeholder="имя" value=""></div>
                    <div class="col-md-6"><label class="labels">Фамилия</label><input type="text" class="form-control" value="" placeholder="фамилия"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Телефон</label><input type="text" class="form-control" placeholder="введите номер телефона" value=""></div>
                    <div class="col-md-12"><label class="labels">Адрес</label><input type="text" class="form-control" placeholder="введите адрес" value=""></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="введите адрес email " value=""></div>
                    <div class="col-md-12"><label class="labels">Образование</label><input type="text" class="form-control" placeholder="образование" value=""></div>
                    <div class="col-md-12"><label class="labels">Профессия</label><input type="text" class="form-control" placeholder="профессия/занятие" value=""></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Страна</label><input type="text" class="form-control" placeholder="страна" value=""></div>
                    <div class="col-md-6"><label class="labels">Регион</label><input type="text" class="form-control" value="" placeholder="регион"></div>
                </div>
                  <base-button class="mt-4"
                                            ><router-link to="#">
                                                Сохранить профиль</router-link
                                            >
                                        </base-button>
            </div>
<div class="p-3">
      <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Опыт разработки</h4>
                </div>
                 <small>HTML</small>
                                        <div
                                            class="progress mb-3"
                                            style="height: 5px"
                                        >
                                            <div
                                                class="progress-bar bg-gradient-gray-600"
                                                role="progressbar"
                                                style="width: 80%"
                                                aria-valuenow="80"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <small>Css</small>
                                        <div
                                            class="progress mb-3"
                                            style="height: 5px"
                                        >
                                            <div
                                                class="progress-bar bg-gradient-gray-600"
                                                role="progressbar"
                                                style="width: 72%"
                                                aria-valuenow="72"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <small>Javascript</small>
                                        <div
                                            class="progress mb-3"
                                            style="height: 5px"
                                        >
                                            <div
                                                class="progress-bar bg-gradient-gray-600"
                                                role="progressbar"
                                                style="width: 89%"
                                                aria-valuenow="89"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                <div class="d-flex justify-content-between align-items-center mt-5"><router-link to="#">
                                               Редактировать</router-link
                                            ><router-link to="#"><span class="border-2  px-3 p-1"><i class="fa fa-plus"></i>&nbsp;Добавить</span></router-link
                                            ></div><br>



                <div class="col-md-12"><label class="labels">Выберите технологию</label><input type="text" class="form-control" placeholder="новый опыт" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Рекомендовать ресурс</label><input type="text" class="form-control" placeholder="добавить ресурс" value=""></div>
                    <base-button class="mt-4"
                                            ><router-link to="#">
                                                Обновить опыт</router-link
                                            >
                                        </base-button>
            </div>

        </div>
    </div>
</div>
</div>
</template>

<script>
import BaseButton from '../../components/Base/BaseButton.vue';
export default {
  components: { BaseButton },
    name: "Profile",
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push("/login");
        }
    },
};
</script>
