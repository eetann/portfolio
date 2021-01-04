<template>
  <TheHeader></TheHeader>
  <MWorks></MWorks>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MWorks from "./components/MWorks.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    MWorks,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
