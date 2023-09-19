<template v-once>
  <div class="container">
    <h1>Rick &amp; Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
    <Pagination />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { ListCharacters, FilterByStatus, FilterByName, Pagination } from "@components";
export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
    Pagination,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getCharacters");
    });
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #fff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-body);
  background-size: contain;
  backdrop-filter: initial;
  color: var(--text-white);
  font-family: "segoe UI", Verdana, Geneva, Tahoma, sans-serif;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 2rem auto;
}

img {
  width: 100%;
}
</style>
