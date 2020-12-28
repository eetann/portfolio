<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
        <h1
          class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
        >
          Works
        </h1>
        <div class="w-20 h-1 bg-blue-500 rounded"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          id="MyWorks"
          v-for="work in works"
          :key="work.added_date"
          class="xl:w-1/4 md:w-1/2 p-4"
        >
          <div class="p-6 bg-gray-100 rounded-lg">
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              v-bind:src="require('@/assets/' + work.thumbnail).default"
              width="720"
              height="400"
            />
            <h2 class="text-lg font-medium text-gray-900 title-font">
              {{ work.name }}
            </h2>
            <div
              class="flex flex-wrap mb-4 text-xs font-medium tracking-widest text-blue-500 title-font"
            >
              <h3 v-for="(tag, key) in work.tags" :key="key" class="mx-1">
                {{ tag }}
              </h3>
            </div>
            <p class="text-base leading-relaxed">
              {{ work.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import file from "../assets/works.yaml";
export default {
  name: "MyWorks",
  data() {
    return { works: [] };
  },
  async created() {
    try {
      this.works = file;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
