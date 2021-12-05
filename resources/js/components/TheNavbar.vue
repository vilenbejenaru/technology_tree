<template>
    <header class="header-global">
        <div class="navbar">
            <router-link :to="{ name: 'Home' }"
                    ><img
                    width="100px"
                        src="/assets/img/ttree/ttree_logo.jpg"
                        alt=""
                        class="img-fluid" /></router-link
            >
           <router-link :to="{ name: 'About' }"
                    > <BaseButton
                >About</BaseButton
            ></router-link
                >
            <router-link :to="{ name: 'Tree' }"
                    ><BaseButton
                >Tree</BaseButton
            ></router-link
                >
            <router-link :to="{ name: 'Frontend' }"
                    ><BaseButton
                >Frontend</BaseButton
            ></router-link
                >
            <router-link :to="{ name: 'Backend' }"
                    ><BaseButton
                >Backend</BaseButton
            ></router-link
                >
            <router-link :to="{ name: '' }"
                    ><BaseButton
                >Регистрация</BaseButton
            ></router-link
                >
        </div>
    </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
    components: { BaseButton },
};
</script>

<style scoped lang="scss">
.navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    background: #e6e7ee;
    box-shadow: 5px 5px 8px #c4c4c4, -5px -5px 8px #ffffff;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}
</style>
