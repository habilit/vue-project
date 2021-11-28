<template>
  <div id="single-news" class="about">
    <h1>News Page</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
