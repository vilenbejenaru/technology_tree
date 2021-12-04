<template>
    <landing-layout>
        <TheNavbar />
        <section-hero />
        <section-faq />
        <section-stats />
        <section-team/>
        <section-problems/>
        <tree-chart-app/>
        <the-footer/>
    </landing-layout>
</template>

<script>
import LandingLayout from "../Layouts/LandingLayout.vue";
import TheNavbar from '../components/TheNavbar.vue';
import SectionHero from '../components/SectionHero.vue';
import SectionFaq from '../components/SectionFaq.vue';
import SectionStats from '../components/SectionStats.vue';
import SectionTeam from '../components/SectionTeam.vue';
import SectionProblems from '../components/SectionProblems.vue';
import TheFooter from '../components/TheFooter.vue';
import TreeChartApp from '../components/TreeChartApp.vue';
// import MainText from '../components/MainText.vue';

export default {
    name: 'LandingPage',
    components: { LandingLayout, TheNavbar, SectionHero, SectionFaq, SectionStats, SectionTeam, SectionProblems, TheFooter, TreeChartApp  },
};
</script>

<style>

</style>
