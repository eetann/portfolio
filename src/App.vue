<template>
  <MyMain></MyMain>
  <MyWorks></MyWorks>
</template>

<script>
import MyMain from './components/MyMain.vue'
import MyWorks from './components/MyWorks.vue'

export default {
  name: 'App',
  components: {
    MyMain,
    MyWorks
  }
}
</script>

<style src="./assets/tailwind.css"></style>
