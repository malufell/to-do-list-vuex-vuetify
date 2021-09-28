<template>
  <div>
    <Menu />
    <Content>
      <slot></slot>
    </Content>
  </div>
</template>

<script>
import Menu from "./Menu";
import Content from "./Content";

export default {
  components: {
    Menu,
    Content,
  },
};
</script>

<style>
</style>