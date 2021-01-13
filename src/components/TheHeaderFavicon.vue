<template>
  <div class="bg-white">
    <a v-bind:href="bio.a_href">
      <img
        v-bind:src="require('@/assets/' + bio.img_src)"
        v-bind:alt="bio.name"
        class="p-1"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ["bio"],
};
</script>
