<template>

<footer class="d-flex pb-4 pt-6 pt-md-7 mt-4 border-top border-light bg-primary">
    <div class="container pt-3">
        <div class="row ">
            <div class="col-lg-4">
                <p><strong>Дерево Технологий</strong> это возможность изучить новые технологии. Будьте в курсе!'</p>
                <ul class="d-flex list-unstyled mb-5 mb-lg-0">
                    <li class="mr-2">
                        <a href="https://twitter.com/TechTree" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="twitter social link"
                        data-toggle="tooltip" data-placement="top" title="Follow @TechTree on Twitter">
                            <span aria-hidden="true" class="fab fa-twitter"></span>
                        </a>
                    </li>
                    <li class="mr-2">
                        <a href="https://www.facebook.com/TechTree/" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="facebook social link"
                        data-toggle="tooltip" data-placement="top" title="Like @TechTree on Facebook">
                            <span aria-hidden="true" class="fab fa-facebook"></span>
                        </a>
                    </li>
                    <li class="mr-2">
                        <a href="https://github.com/TechTree" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="github social link"
                        data-toggle="tooltip" data-placement="top" title="Open source projects">
                            <span aria-hidden="true" class="fab fa-github"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/TechTree" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="dribbble social link"
                        data-toggle="tooltip" data-placement="top" title="Follow us on Dribbble">
                            <span aria-hidden="true" class="fab fa-dribbble"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                <h5>TechTree</h5>
                <ul class="footer-links list-unstyled mt-2">
                    <li class="mb-1"><a class="p-2" target="_blank" href="#">Блог</a></li>
                    <li class="mb-1"><a class="p-2" target="_blank" href="#">Обучение</a></li>
                    <li class="mb-1"><a class="p-2" target="_blank" href="#">О нас</a></li>
                    <li><a class="p-2" target="_blank" href="#">Написать</a></li>
                </ul>
            </div>
            <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                <h5>Tech</h5>
                <ul class="footer-links list-unstyled mt-2">

                    <li class="mb-1">
                       <router-link :to="{ name: 'Tree' }"
                    target="_blank" >Tree</router-link
                >
                    </li>
                    <li class="mb-1">
                          <router-link :to="{ name: 'Frontend' }"
                    target="_blank" >Frontend</router-link
                >
                    </li>
                    <li>
                          <router-link :to="{ name: 'Backend' }"
                    target="_blank" >Backend</router-link
                >
                    </li>
                    <li class="mb-1">
                          <router-link :to="{ name: '' }"
                    target="_blank" >Fullstack
                        <span class="badge badge-gray text-uppercase ml-2">скоро</span></router-link
                >
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                <h5>Рассылка</h5>
                <p class="text-gray font-small mt-2">Последние тенденции в изучении компьютерных  технологий</p>
                <form action="#">
                    <div class="form-row mb-2">
                        <div class="col-12">
                            <label class="h6 font-weight-normal d-none" for="exampleInputEmail3">Email address</label>
                            <input type="email" class="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" id="exampleInputEmail3" required>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block" data-loading-text="Sending">
                                <span>Подписаться</span>
                            </button>
                        </div>
                    </div>
                </form>
                <p class="text-gray font-small m-0">Данные никогда не передаются третьим лицам<a class="text-black" href="#">Политика конфиденциальности</a></p>
            </div>
        </div>
        <hr class="my-3">
        <div class="row">
            <div class="col">
                   <router-link :to="{ name: 'Home' }"
                    target="_blank" class="d-flex justify-content-center">
                    <img src="/assets/img/ttree/ttree_logo.jpg" height="50" class="mb-3" alt="TechTree Logo">
                    </router-link>
            <div class="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p class="font-weight-normal font-small mb-0">Copyright © TechTree
                    <span class="current-year">2021</span>. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
