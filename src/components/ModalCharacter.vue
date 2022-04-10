<template>
  <!-- TODO:TEMINAR LA MODAL RECURRIENDO ALA API https://rickandmortyapi.com/api/character/2-->
  <article
    class="modal-container"
    @keyup.esc="closeModal"
    tabindex="0"
    @click.self="closeModal"
    v-if="modal"
  >
    <section class="modal" v-if="Object.keys(person).length > 0">
      <figure>
        <img :src="person.image" :alt="person.name" />
      </figure>
      <header class="modal-text">
        <button class="close tooltip" @click="closeModal">
          X
          <span class="tooltiptext">cerrar</span>
        </button>
        <h2>{{ person.name }}</h2>
        <hr />
        <div>Status: {{ person.status }}</div>
        <div>Specie: {{ person.species }}</div>
        <div>Origin: {{ person.origin.name }}</div>
        <div>location: {{ person.location.name }}</div>
        <div>
          Created: {{
            new Intl.DateTimeFormat('en', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(person.created))
          }}
        </div>
        <div>Gender: {{ person.gender }}</div>
        <div>Type: {{ person.type }}</div>
      </header>
    </section>
    <!-- ventana al cargar los datos -->
    <section v-else>
      <h3>Loading . . .</h3>
    </section>
  </article>
</template>
<script>
'use strict';
import { computed } from 'vue'
import { useStore } from "vuex";
export default {
  props: {
    modal: Boolean,
  },
  setup(props, { emit }) {
    const store = useStore();
    const person = computed(() => { return store.state.person });
    const closeModal = () => {
      emit("closeM", false);
    };
    return {
      person,
      closeModal,
    };
  },
}
</script>
<style scoped lang="scss">
.modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 90%;
  max-height: 85%;
  grid-column: 55% 45%;
  background: rgba(36, 36, 36, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  color: whitesmoke;
  display: flex;
  &-text {
    width: 100%;
    margin: 1% 0 2% 2%;
    button {
      width: 4%;
      height: 5%;
      position: absolute;
      right: 8px;
      margin: 0px 0px 10px 0px;
      top: 5px;
      color: whitesmoke;
      border: none;
      border-radius: 10px;
      background: transparent;
      &:hover {
        cursor: pointer;
        background: linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%);
      }
      &alt {
        background-color: transparent;
      }
    }
    h2 {
      margin-top: 1rem;
    }
  }
}
figure {
  margin: 0;
  img {
    height: 100%;
    border-radius: 20px;
  }
}
.tooltip {
  .tooltiptext {
    width: 120px;
    background-color: #555;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: -180%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.5s;
    &::after {
      content: "";
      position: absolute;
      top: -40%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(0.5turn);
    }
  }
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
}
</style>