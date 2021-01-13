<template>
  <div class="px-5 lg:px-40 font-sans antialiased text-gray-900">
    <div class="md:flex md:items-center p-4 bg-white">
      <img
        class="md:flex-none w-20 h-20 md:w-40 md:h-40 mx-4 rounded-full shadow-xl"
        src="@/assets/eetann_icon.jpg"
      />
      <div class="md:flex-auto px-4">
        <h1 class="text-3xl font-bold">eetann</h1>
        <p class="py-4 text-sm">プログラミングが好きな大学生です。</p>

        <div class="flex flex-wrap justify-start space-x-7">
          <TheHeaderFavicon
            v-for="bio in bios"
            v-bind:key="bio.name"
            v-bind:bio="bio"
            class="w-8 h-8 rounded-xl"
          ></TheHeaderFavicon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import file from "../assets/bios.yaml";
import TheHeaderFavicon from "./TheHeaderFavicon.vue";
export default {
  components: { TheHeaderFavicon },
  data() {
    return { bios: [] };
  },
  async created() {
    try {
      this.bios = file;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
