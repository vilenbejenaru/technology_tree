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
import SectionHero from "../components/Sections/SectionHero.vue";
import SectionFaq from "../components/Sections/SectionFaq.vue";
import SectionStats from "../components/Sections/SectionStats.vue";
import SectionTeam from "../components/Sections/SectionTeam.vue";
import SectionProblems from "../components/Sections/SectionProblems.vue";
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
