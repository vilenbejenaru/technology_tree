<template>
    <landing-layout>
        <h2>Landing Page</h2>
        <tree-chart/>
    </landing-layout>
</template>

<script>
import TreeChart from '../components/TreeChart.vue';
import LandingLayout from "../Layouts/LandingLayout.vue";

export default {
    components: { LandingLayout, TreeChart, },
};
</script>

<style></style>
