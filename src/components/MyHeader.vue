<template>
  <div
    id="MyHeader"
    class="font-sans antialiased leading-normal tracking-wider text-gray-900 bg-gray-100"
  >
    <div id="profile" class="flex bg-white shadow-xl">
      <div class="flex-auto p-4 text-center">
        <h1 class="pt-8 text-3xl font-bold lg:pt-0">eetann</h1>
        <div
          class="w-full pt-3 mx-auto border-b-2 border-green-500 opacity-25 lg:mx-0"
        ></div>
        <p class="pt-8 text-sm">プログラミングが好きな大学生です。</p>

        <div
          class="flex flex-wrap items-center w-4/5 pb-16 mx-auto mt-6 justify-evenly lg:pb-0 lg:w-full"
        >
          <!--
          これから表示したいものを増やす可能性を考慮してyamlとv-forで管理
          記述量はyamlの分のみ増える
          -->
          <a
            v-for="(bio, key) in bios"
            :key="key"
            class="link"
            v-bind:href="bio.a_href"
          >
            <!-- @がビルド後のパスでrequireできるように、ディレクトリとファイル名を分離して記述 -->
            <img
              v-bind:src="require('@/assets/' + bio.img_src).default"
              v-bind:alt="bio.name"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
      <img
        class="flex-none w-12 h-12 mx-2 my-2 rounded-full shadow-xl md:w-24 md:h-24"
        src="../assets/eetann_icon.jpg"
      />
    </div>
  </div>
</template>

<script>
// vueファイルでは、自動でファイル名がname属性になる
import file from "../assets/bios.yaml";
export default {
  name: "MyHeader",
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
