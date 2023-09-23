<template>
  <Transition name="fadeIn" mode="out-in" class="character" @click="open(true)">
    <div>
      <img width="100%" loading="auto" :src="character.image" :alt="character.name" />
      <div class="character__info">
        <h2>{{ character.name }}</h2>
        <div class="status">
          <span :class="character.status == 'Alive'
            ? 'alive'
            : character.status == 'Dead'
              ? 'dead'
              : 'default'
            "></span>
          <span>{{ character.status }} - {{ character.species }}</span>
        </div>
        <div class="origin">
          <span>origin : {{ character.origin.name }}</span>
        </div>
        <div class="location">location: {{ character.location.name }}</div>
      </div>
    </div>
  </transition>

  <ModalCharacter :modal="modal" @closeM="closeM" />
</template>
<script>
import ModalCharacter from "@/components/ModalCharacter.vue";
import { ref, onMounted } from 'vue'
import { useStore } from "vuex";


export default {
  name: 'CardCharacter',
  props: ["character"],

  setup(props) {
    const store = useStore();
    const modal = ref(false);

    const open = (data) => {
      const id = props.character.id;
      store.dispatch("getAllDataPerson", id);
      modal.value = data;
    };

    const closeM = (data) => {
      modal.value = data;
    };

    return {
      modal,
      open,
      closeM,
    }
  },

  components: {
    ModalCharacter
  },
};
</script>

<style lang="scss">
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s ease;

}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}

.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  scroll-behavior: auto;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px 1px var(--text-orange);

    h2 {
      color: var(--text-orange);
    }
  }

  span {
    color: var(--text-gray);
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  &__info {
    padding: 1.5rem;

    .status {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      span {
        color: var(--text-gray);

        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }
    }

    .alive {
      background-color: green;
    }

    .dead {
      background-color: red;
    }

    .default {
      background-color: white;
    }
  }

  .origen {
    margin-bottom: 0.5rem;
  }
}
</style>