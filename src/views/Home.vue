<template>
  <div class="home">
    <NewCard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import NewCard from '@/components/news-card/NewCard.vue';

export default {
  name: 'Home',
  components: {
    NewCard,
  },
};
</script>
