<template>
  <div
    class="overflow-hidden fixed inset-0 z-50 border-0 rounded-lg shadow-lg mx-auto my-auto max-w-45rem max-h-5/6 bg-white outline-none focus:outline-none"
  >
    <div
      class="h-1/10 flex justify-between px-6 py-2 border-b border-solid border-gray-300 font-semibold"
    >
      <h3 class="text-3xl my-auto">{{ work.name }}</h3>
      <button
        class="bg-transparent border-0 text-black outline-none focus:outline-none text-xl"
        v-on:click="emitCloseModal"
      >
        ✕
      </button>
    </div>
    <div class="overflow-y-scroll h-4/5 px-6 py-2 flex-auto">
      <img
        class="mx-auto rounded rounded-3xl max-h-80"
        v-bind:src="require('@/assets/' + work.intro_img).default"
      />
      <div
        class="flex flex-wrap my-4 text-sm font-medium tracking-widest text-blue-500 title-font"
      >
        <h3
          v-for="(tag, key) in work.tags"
          v-bind:key="'tag' + key"
          class="mx-1"
        >
          {{ tag }}
        </h3>
      </div>
      <p class="my-4 text-lg leading-relaxed text-gray-600">
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
    <div class="px-6 py-2 border-t border-gray-300 h-1/10">
      <a
        class="block w-full h-full text-center p-2 font-bold text-2xl text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white"
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
