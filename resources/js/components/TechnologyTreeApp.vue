<template>
<landing-page/>
</template>

<script>

import LandingPage from '../Pages/LandingPage.vue'

    export default {
  components: { LandingPage },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
