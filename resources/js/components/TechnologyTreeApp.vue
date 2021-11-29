<template>
    <div>
        <landing-page />

        <user-page />
    </div>
</template>

<script>
import LandingPage from "../Pages/LandingPage.vue";
import UserPage from "../Pages/UserPage.vue";
export default {
    components: { LandingPage, UserPage },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
