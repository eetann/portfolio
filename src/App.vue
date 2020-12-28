<template>
  <MyHeader></MyHeader>
  <MyWorks></MyWorks>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyWorks from "./components/MyWorks.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyWorks,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
