<template>
  <div
    class="overflow-hidden fixed inset-0 z-50 max-w-45rem max-h-5/6 mx-auto my-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
  >
    <div
      class="h-1/20 text-right align-bottom px-6 py-1 border-b border-solid border-gray-300"
    >
      <button
        class="text-xl bg-transparent border-0 outline-none focus:outline-none"
        v-on:click="emitCloseModal"
      >
        ✕
      </button>
    </div>
    <div class="overflow-y-scroll h-17/20 px-6 py-2">
      <img
        class="max-h-80 mx-auto rounded"
        v-bind:src="require('@/assets/' + work.intro_img)"
      />
      <h3 class="text-3xl my-2">{{ work.name }}</h3>
      <div class="flex flex-wrap text-sm my-1 font-medium text-blue-500">
        <h3
          v-for="(tag, key) in work.tags"
          v-bind:key="'tag' + key"
          class="mx-1"
        >
          {{ tag }}
        </h3>
      </div>
      <p class="text-lg my-2 text-gray-600">
        {{ work.description }}
      </p>
      <div v-if="work.links">
        Links
        <ul class="list-disc list-inside">
          <li v-for="link in work.links" v-bind:key="link.url">
            <a v-bind:href="link.url" class="underline">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="table w-full h-1/10 px-6 py-2 border-t border-gray-300">
      <a
        class="table-cell align-middle text-center text-3xl w-full h-full font-bold rounded text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
        v-bind:href="work.here"
        >Here!</a
      >
    </div>
  </div>
  <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
</template>

<script>
export default {
  props: ["work"],
  emits: ["close"],
  methods: {
    // 親から渡されたshowModalを子は変更しないように発火関数を設置
    emitCloseModal: function () {
      this.$emit("close");
    },
  },
};
</script>
