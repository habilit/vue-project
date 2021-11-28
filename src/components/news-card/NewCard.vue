<template>
    <div class="news-container">
        <h1 v-if="isLoading">Content is Loading...</h1>
        <div
        class="new-card"
        v-for="(item, i) in newList"
        :class="{'blue-bg': i % 2 === 1 }"
        v-bind:key="item.id" >
            <div class="arrow-right">
                <router-link to="/about">
                    ==>
            </router-link>
                </div>
            <div class="new-part">
                <div class="news-date">24.01.21</div>
                <h1>{{item.name}}</h1>
                <div class="news-detail">{{item.description}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewCard',
  methods: {
    ...mapActions(['fetchNews']),
  },
  computed: {
    ...mapGetters(['newList', 'isLoading']),
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style scoped>
    .news-container {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .new-card {
        padding: 10px;
        text-align: left;
        border-radius: 5px;
        margin-top: 2rem;
        border: 1px solid #ccc;
        flex-basis: 21%;
        max-width: 21%;
        max-height: 330px;
    }
    .new-card:hover {
        background-color: #243458;
        opacity: 0.2;
    }
    h1 {
        color: #3c5894;
    }
    .news-detail{
        color: #6f94b6;
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .blue-bg {
        background-color: #243458;
        color: #fff;
    }
    .blue-bg .news-detail,
    .blue-bg h1{
        color: #fff;
    }

    .blue-bg{
        padding-top: 70px;
    }
</style>
