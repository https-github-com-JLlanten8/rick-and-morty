import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: Array,
    charactersFilter: Array,
    prev: '',
    next: String,
    person: Object,
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setPrev(state, payload) {
      state.prev = payload;
    },
    setNext(state, payload) {
      state.next = payload;
    },
    setDataPerson(state, payload) {
      state.person = payload;
    },
  },
  actions: {
    async getCharacters({ commit }, page) {
      try {
        if (page) {
          const response = await fetch(page);
          const data = await response.json();
          commit('setCharacters', data.results);
          commit('setCharactersFilter', data.results);
          commit('setNext', data.info.next);
          commit('setPrev', data.info.prev);
        } else {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const data = await response.json();
          commit('setCharacters', data.results);
          commit('setCharactersFilter', data.results);
          commit('setNext', data.info.next);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAllDataPerson({ commit }, idPerson) {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${idPerson}`)
        const data = await res.json();
        commit('setDataPerson', data);
      } catch (error) {
        alert('error on get data person: ', error);
      }
    },
    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit('setCharactersFilter', results);
    },
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        };
      });
      commit('setCharactersFilter', results);
    },

  },
  modules: {
  }
})

