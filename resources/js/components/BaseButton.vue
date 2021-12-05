<template>
  <button class="navbar__btn mx-3">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style scoped lang="scss">
.navbar__btn {
  border-radius: 5px;
  border: none;
  background: #e6e7ee;
  box-shadow: 5px 5px 8px #c4c4c4, -5px -5px 8px #ffffff;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  padding: 14px 50px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 18px;
  outline: none;

  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  }
}
</style>
