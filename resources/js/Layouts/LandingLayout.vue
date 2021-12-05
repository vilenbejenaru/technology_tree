<template>
    <div>
        <the-navbar></the-navbar>
        <!-- page content -->
        <router-view></router-view>
        <!-- <slot></slot> -->
        <!-- page content -->
        <the-footer />
    </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    name: "LandingLayout",
    components: { TheFooter, TheNavbar },
};
</script>

<style lang="scss" scoped></style>
