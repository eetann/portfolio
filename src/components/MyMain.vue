<template>
  <div class="font-sans antialiased leading-normal tracking-wider text-gray-900 bg-gray-100">
    <div class="flex flex-wrap items-center h-auto max-w-4xl mx-auto my-32 lg:h-screen lg:my-0">

      <!--Main Col-->
      <div id="profile"
        class="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0">

        <div class="p-4 text-center md:p-12 lg:text-left">
          <!-- Image for mobile view-->
          <img class="w-48 h-48 mx-auto -mt-16 rounded-full shadow-xl lg:hidden" src="../assets/eetann_icon.jpg">

          <h1 class="pt-8 text-3xl font-bold lg:pt-0">eetann</h1>
          <div class="w-4/5 pt-3 mx-auto border-b-2 border-green-500 opacity-25 lg:mx-0"></div>
          <p class="pt-8 text-sm">プログラミングが好きな大学生です。</p>

          <div class="flex flex-wrap items-center w-4/5 pb-16 mx-auto mt-6 justify-evenly lg:pb-0 lg:w-full">
            <a class="link" href="https://zenn.dev/eetann">
              <img src="../assets/zenn_logo_256.svg" alt="zenn icon" width="32" height="32">
            </a>
            <a class="link" href="https://github.com/eetann">
              <img src="../assets/github_logo_32.png" alt="github icon" width="32" height="32">
            </a>
            <a class="link" href="https://twitter.com/eetann092">
              <img src="../assets/twitter_logo_256.svg" alt="twitter icon" width="32" height="32">
            </a>
            <a class="link" href="https://note.com/eetann">
              <img src="../assets/note_logo_256.svg" alt="note icon" width="32" height="32">
            </a>
            <a class="link" href="https://qiita.com/eetann">
              <img src="../assets/qiita_logo_370.png" alt="qiita icon" width="32" height="32">
            </a>
          </div>
        </div>
      </div>
      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <img src="../assets/eetann_icon.jpg" class="hidden rounded-none shadow-2xl lg:rounded-lg lg:block">
        <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
      </div>
    </div>
  </div>
</template>

<script>
// vueファイルでは、自動でファイル名がname属性になる
export default {
  name: 'MyMain'
}
</script>
