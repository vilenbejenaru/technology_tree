<template>
    <header class="header-global">
        <nav class="navbar">
            <router-link :to="{ name: 'Home' }"
                ><img
                    width="100px"
                    src="/assets/img/ttree/ttree_logo.jpg"
                    alt=""
                    class="img-fluid"
            /></router-link>
            <router-link :to="{ name: 'About' }">
                <BaseButton>О проекте</BaseButton></router-link
            >
            <router-link :to="{ name: 'Tree' }"
                ><BaseButton>Дерево</BaseButton></router-link
            >
            <router-link :to="{ name: 'Frontend' }"
                ><BaseButton>Фронтенд</BaseButton></router-link
            >
            <router-link :to="{ name: 'Backend' }"
                ><BaseButton>Бэкенд</BaseButton></router-link
            >
            <BaseButton v-if="!currentUser" >
                    <router-link to="/register" >
                        <i class="fas fa-user-plus"></i>
                        <!-- Регистрация -->
                    </router-link>
                    /
                    <router-link to="/login">
                        <i class="fas fa-sign-in-alt"></i>
                        <!-- Войти -->
                    </router-link>
            </BaseButton>


            <BaseButton v-if="currentUser">
                    <router-link to="/profile" >
                        <i class="fas fa-user"></i>
                        {{ currentUser.username }}
                    </router-link>
                    <a class="nav-link" href @click.prevent="logOut">
                        <i class="fas fa-sign-out-alt"></i>   Выйти
                    </a>
            </BaseButton>

        </nav>


    </header>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";

export default {
    name: "TheHeader",
    components: { BaseButton },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        showAdminBoard() {
            if (this.currentUser && this.currentUser.roles) {
                return this.currentUser.roles.includes("ROLE_ADMIN");
            }

            return false;
        },
        showModeratorBoard() {
            if (this.currentUser && this.currentUser.roles) {
                return this.currentUser.roles.includes("ROLE_MODERATOR");
            }

            return false;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/login");
        },
    },
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
