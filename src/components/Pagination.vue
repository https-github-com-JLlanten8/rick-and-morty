<template>
  <div class="buttons">
    <button class="btn" @click="prevPage(pagePrev)">⬅ Back</button>
    <button class="btn" @click="nextPage(pageNext)">Next ➡</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    /* Variables del store */
    const pageNext = computed(() => {
      return store.state.next;
    });
    const pagePrev = computed(() => {
      return store.state.prev;
    });

    /* Funciones */
    const prevPage = (pagePrev) => {
        if(prevPage){
          store.dispatch("getCharacters", pagePrev);
        }
    };
    const nextPage = (pageNext) => {
      if (pageNext) {
        store.dispatch("getCharacters", pageNext);
      }
    };
    return {
      pagePrev,
      pageNext,
      nextPage,
      prevPage
    };
  },
};
</script>
<style lang="scss">
.buttons {
  width: 330px;
  margin: 2rem auto 0;
  .btn {
    height: 50px;
    width: 120px;
    margin: 10px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 0.5rem;
    background: linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%);
    color: cornsilk;
    &:hover {
      color: var(--background-body);
    }
    &:active {
      transform: scale(1.1, 1.2);
      font-size: 20px;
      box-shadow: 5px 4px 4px violet;
    }
  }
}
</style>