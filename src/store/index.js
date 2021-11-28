import { createStore } from 'vuex';
import { get } from 'lodash';
import axios from 'axios';

const apiUrl = 'https://newsapi.org/v2/sources?apiKey=';
const apiKey = '099148be22804e849a0c6fe022b7cf5e';
const newApi = apiUrl + apiKey;

export default createStore({
  state: {
    newList: [],
    isError: false,
    isLoading: false,
  },
  mutations: {
    SET_NEWS(state, news) {
      console.log('call SET_NEWS', news);
      state.newList = news;
    },
    SET_NEWS_ERROR(state) {
      state.isError = true;
    },
    SET_ISLOADING(state, isLoading) {
      console.log('isLoading', isLoading);
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchNews({ commit }) {
      commit('SET_ISLOADING', true);
      try {
        const res = await axios.get(newApi);
        const data = get(res, ['data', 'sources']) || [];
        console.log('data store ', data);
        commit('SET_NEWS', data);
        commit('SET_ISLOADING', false);
      } catch (error) {
        commit('SET_ISLOADING', false);
        commit('INSERT_ERROR', error);
      }
    },
  },
  modules: {
  },
  getters: {
    newList(state) {
      return state.newList;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
});
