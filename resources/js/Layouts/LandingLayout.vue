<template>
    <div>
        <the-header></the-header>
        <!-- page content -->
        <div class="container">
            <router-view />
        </div>
        <!-- <slot></slot> -->
        <!-- page content -->
        <the-footer />
    </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    name: "LandingLayout",
    components: { TheFooter, TheHeader },
};
</script>

<style lang="scss" scoped></style>
