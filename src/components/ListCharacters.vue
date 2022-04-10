<template>

  <section>
    <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
  <ModalCharacter />
</template>
<script>
import CardCharacter from "@/components/CardCharacter";
import ModalCharacter from "@/components/ModalCharacter";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    CardCharacter,
    ModalCharacter,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    return {
      characters,
    };
  },
};
</script>
<style>
.characters {
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(27.5%, 1fr) );
  gap: 2rem;
  margin: 2rem 0;
}
</style>