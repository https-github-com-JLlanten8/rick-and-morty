<template>
  <div class="character">
    <div class="character__loading"></div>
    <div class="character__info">
      <h2>Cargando...</h2>
      <div class="status">
        <span class="default"></span>
        <span>Cargando...</span>
      </div>
      <div class="origin">
        <span>origin : Cargando...</span>
      </div>
      <div class="location">location: Cargando...</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  scroll-behavior: auto;


  &__loading {
    height: 200px;
    width: 100%;
    background-color: var(--text-gray);
    animation: loading 1s infinite;
  }

  &__info {
    padding: 1.5rem;

    .default {
      background-color: white;
    }
  }

  .origen {
    margin-bottom: 0.5rem;
  }
}

@keyframes loading {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.2;
  }
}
</style>