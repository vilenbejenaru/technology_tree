<template>
    <landing-layout>
        <the-navbar />
        <section-hero />
        <section-faq />
        <section-stats />
    </landing-layout>
</template>

<script>
import LandingLayout from "../Layouts/LandingLayout.vue";
import TheNavbar from '../components/TheNavbar.vue';
import SectionHero from '../components/SectionHero.vue';
import SectionFaq from '../components/SectionFaq.vue';
import SectionStats from '../components/SectionStats.vue';

export default {
    name: 'LandingPage',
    components: { LandingLayout, TheNavbar, SectionHero, SectionFaq, SectionStats,   },
};
</script>

<style>

</style>
