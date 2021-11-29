<template>
  <div class="container">
        <div class="vw">
<!-- page content -->
      <slot/>
<!-- page content -->

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style >
.vw {
background-color: silver;
width: 90%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
}
</style>
