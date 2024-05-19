<template>
  <header class="header">
    <h1 class="header__title">
      <router-link :to="{ name: 'home' }">Título</router-link>
    </h1>
    <div class="header__blue">
      <header-search class="header__search" />
      <nav class="header__nav">
        <router-link class="header__anchor" :to="{ name: 'product-form' }">
          Criar Produto
        </router-link>
        <router-link class="header__anchor" :to="{ name: 'showcase-form' }">
          Criar Seção
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import HeaderSearch from "./header-search.vue";
</script>

<style lang="scss" scoped>
  .header {
    background-color: var(--color-2);
    display: flex;
    flex-flow: row wrap;

    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1.5px;

      text-align: center;

      flex-basis: 200px;
      flex-grow: 1;
      padding: 5px;

      color: var(--color-6);
    }

    &__blue {
      flex-grow: 1;

      display: flex;
      flex-flow: row wrap;

      background-color: var(--color-5);
    }

    &__search {
      flex: 10;
    }
    &__nav {
      display: flex;
      flex-flow: row nowrap;
      column-gap: 20px;
      align-items: center;
      padding: 10px;
      flex-grow: 1;
      justify-content: space-around;
    }

    &__anchor {
      padding: 7.5px 20px;
      border-radius: 5px;

      box-shadow: 1px 1px 5px #0000004b;

      color: #fff;
      background-color: var(--color-1);

      transition: 200ms ease-in-out;

      min-width: fit-content;

      &:active {
        background-color: var(--color-2);
        scale: 0.95;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .header {
      &__title {
        max-width: 200px;
      }

      &__nav {
        max-width: 300px;
      }
    }
  }
</style>
