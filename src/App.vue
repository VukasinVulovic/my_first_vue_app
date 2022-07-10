<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <NewsPost/>
    <!-- <div class="comments">
      <CommentCard pfp="./assets/images/pfp.png" user-name="User Name" title="Title" text="Post Text" :score='0' voted="none" :date='new Date().toDateString()'/>
    </div> -->
  </main>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  // import CommentCard from './components/CommentCard.vue';
  import NewsPost from './components/NewsPost.vue';

  export default {
    name: 'App',
    components: {
      NavBar,
      // CommentCard,
      NewsPost
    }
  }
</script>

<style lang="scss">
  $bg-color: hsl(345, 4%, 12%); 

  @font-face {
    font-family: 'Ubuntu';
    src: url(./assets/fonts/Ubuntu/Ubuntu-Regular.ttf);
  }

  html, body {
    font-family: 'Ubuntu';
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-color: $bg-color;
    width: 100%;
  }

  header {
    width: 100%;
  }

  main {
    justify-content: center;
    display: flex;
    width: 100%;

    .comments {
      display: grid;
      grid-row: 1fr;
      row-gap: 0.5em;
      padding: 0.5em;
      width: 100%;
    }
  }
</style>