<template>
  <section class="text-gray-600 body-font px-5 lg:px-40">
    <div class="px-5 py-12 mx-auto">
      <div class="w-full mb-6">
        <h1
          class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
        >
          Works
        </h1>
        <div class="w-20 h-1 bg-blue-500 rounded"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="work in works"
          v-bind:key="work.added_date"
          class="xl:w-1/3 md:w-1/2 p-4"
        >
          <div
            class="p-6 bg-gray-100 rounded-lg cursor-pointer"
            v-on:click="openModal(work)"
          >
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
              <h3
                v-for="(tag, index) in work.tags"
                v-bind:key="index"
                class="mx-1"
              >
                {{ tag }}
              </h3>
            </div>
            <p class="text-base leading-relaxed h-12 overflow-hidden">
              {{ work.description }}
            </p>
          </div>
          <MModal
            v-if="showModal == work.added_date"
            v-bind:work="work"
            v-on:close="closeModal"
          ></MModal>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import file from "../assets/works.yaml";
import MModal from "./MModal.vue";
export default {
  components: { MModal },
  data() {
    return { works: [], showModal: "" };
  },
  methods: {
    openModal(work) {
      this.showModal = work.added_date;
    },
    closeModal() {
      this.showModal = "";
    },
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
