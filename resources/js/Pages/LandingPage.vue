<template>
    <landing-layout>
        <wwww />
    </landing-layout>
</template>

<script>
import Wwww from '../components/wwww.vue';
import LandingLayout from "../Layouts/LandingLayout.vue";

export default {
    name: 'LandingPage',
    components: { LandingLayout, Wwww,   },
};
</script>

<style lang="scss" scoped></style>
