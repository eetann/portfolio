<template>
  <div id="MyWorks" v-for="(work, key) in works" :key="key">
    {{ work.name }}
  </div>
</template>
<script>
import file from '../assets/works.yaml'
export default {
  name: "MyWorks",
  data() {
    return {works: []}
  },
  async created() {
    try {
      this.works = file;
      console.log(file)
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
