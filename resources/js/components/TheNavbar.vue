<template>
  <header class="header-global">
    <div class="navbar">
        <BaseButton><router-link :to="{ name: 'Home' }">Logo</router-link></BaseButton>
        <BaseButton><router-link :to="{ name: 'About' }">About</router-link></BaseButton>
        <BaseButton><router-link :to="{ name: 'Tree' }">Tree</router-link></BaseButton>
        <BaseButton><router-link :to="{ name: 'Frontend' }">Frontend</router-link></BaseButton>
        <BaseButton><router-link :to="{ name: 'Backend' }">Backend</router-link></BaseButton>
        <router-view></router-view>
    </div>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style scoped lang="scss">
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background: #e6e7ee;
  box-shadow: 5px 5px 8px #c4c4c4, -5px -5px 8px #ffffff;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
</style>
