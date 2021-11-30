<template>
  <div class="container">
        <div class="row justify-content-center">
<!-- page content -->
      <slot/>
<!-- page content -->

        </div>
    </div>
</template>

<script>
    export default {
        name: 'LandingLayout',

    }
</script>

<style lang="scss" scoped>
.container {
width: 60%;
margin: 5vh auto;
height: 40vh;
// background-color: blue;
}
</style>
