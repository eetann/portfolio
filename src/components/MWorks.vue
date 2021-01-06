<template>
  <section class="px-5 lg:px-40 text-gray-600 body-font">
    <div class="px-5 py-12 mx-auto">
      <div class="w-full mb-6">
        <h1 class="text-2xl sm:text-3xl mb-2 font-medium text-gray-900">
          Works
        </h1>
        <div class="w-20 h-1 bg-blue-500 rounded"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="work in works"
          v-bind:key="work.release_date"
          class="xl:w-1/3 md:w-1/2 p-4"
        >
          <div
            class="p-6 bg-gray-100 rounded-lg cursor-pointer"
            v-on:click="openModal(work)"
          >
            <img
              class="object-contain object-center w-full h-40 mb-6 rounded"
              v-bind:src="require('@/assets/' + work.thumbnail).default"
            />
            <h2 class="text-lg font-medium text-gray-900">
              {{ work.name }}
            </h2>
            <div
              class="flex flex-wrap mb-4 text-xs font-medium tracking-widest text-blue-500"
            >
              <h3
                v-for="(tag, index) in work.tags"
                v-bind:key="index"
                class="mx-1"
              >
                {{ tag }}
              </h3>
            </div>
            <p class="overflow-hidden text-base h-12 leading-relaxed">
              {{ work.description }}
            </p>
          </div>
          <MModal
            v-if="showModal == work.release_date"
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
      this.showModal = work.release_date;
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
