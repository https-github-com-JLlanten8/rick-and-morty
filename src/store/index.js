import { createStore } from "vuex";

const URL = "https://rickandmortyapi.com/api/character";

export default createStore({
  state: {
    characters: Array,
    charactersFilter: Array,
    prev: "",
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
          const { results, info } = await response.json();
          commit("setCharacters", results);
          commit("setCharactersFilter", results);
          commit("setNext", info.next);
          commit("setPrev", info.prev);
        }
        const response = await fetch(`${URL}`);
        const { results, info } = await response.json();
        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setNext", info.next);
      } catch (error) {
        commit("setCharactersFilter", []);
        commit("setNext", "");
        commit("setPrev", "");
      }
    },

    async getAllDataPerson({ commit }, idPerson) {
      try {
        const res = await fetch(`${URL}/${idPerson}`);
        const data = await res.json();
        commit("setDataPerson", data);
      } catch (error) {
        alert("error on get data person: ", error);
      }
    },

    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", results);
    },

    async filterByName({ commit, state }, name) {
      if (!name) {
        return;
      }

      //?name=rick&status=alive
      const res = await fetch(`${URL}/?name=${name.toLowerCase()}`)
        .then((res) => res.json())
        .then(({ results, info }) => {
          commit("setCharactersFilter", results);
          if (info.next) {
            commit("setNext", info.next);
          }
          if (info.prev) {
            commit("setPrev", info.prev);
          }
        })
        .catch(() => {
          commit("setCharactersFilter", []);
          commit("setNext", "");
          commit("setPrev", "");
        });
    },

    filterByNameLocal({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit("setCharactersFilter", results);
    },
  },
});
