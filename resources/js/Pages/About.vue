<template>
<div>
        <section-hero />
        <section-faq />
        <section-stats />
        <section-team/>
        <section-problems/>
</div>
</template>

<script>
import SectionHero from "../components/SectionHero.vue";
import SectionFaq from "../components/SectionFaq.vue";
import SectionStats from "../components/SectionStats.vue";
import SectionTeam from "../components/SectionTeam.vue";
import SectionProblems from "../components/SectionProblems.vue";
import LandingLayout from '../Layouts/LandingLayout.vue';

export default {
    name: "AboutPage",
    components: {
        SectionHero,
        SectionFaq,
        SectionStats,
        SectionTeam,
        SectionProblems,
        LandingLayout,
    },
};
</script>,


<style></style>
