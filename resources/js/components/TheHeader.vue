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
            <router-link :to="{ name: '' }"
                ><BaseButton>Регистрация</BaseButton></router-link
            >
        </nav>

        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href class="navbar-brand" @click.prevent>bezKoder</a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        <font-awesome-icon icon="home" />Home
                    </router-link>
                </li>
                <li v-if="showAdminBoard" class="nav-item">
                    <router-link to="/admin" class="nav-link"
                        >Admin Board</router-link
                    >
                </li>
                <li v-if="showModeratorBoard" class="nav-item">
                    <router-link to="/mod" class="nav-link"
                        >Moderator Board</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/user" class="nav-link"
                        >User</router-link
                    >
                </li>
            </div>

            <div v-if="!currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">
                        <font-awesome-icon icon="user-plus" />Sign Up
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">
                        <font-awesome-icon icon="sign-in-alt" />Login
                    </router-link>
                </li>
            </div>

            <div v-if="currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/profile" class="nav-link">
                        <font-awesome-icon icon="user" />
                        {{ currentUser.username }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href @click.prevent="logOut">
                        <font-awesome-icon icon="sign-out-alt" />LogOut
                    </a>
                </li>
            </div>
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
