<template>
  <header class="header">
    <router-link
      class="header__anchor"
      :to="{ name: 'showcase', params: { id: props.id } }"
    >
      <h1
        class="header__title"
        :class="{ 'header__title--empty': props.name.length === 0 }"
      >
        {{ props.name }}
      </h1>
    </router-link>
  </header>
</template>

<script setup lang="ts">
  interface Props {
    name: string;
    id: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    &__anchor {
      display: block;
      width: 100%;
      height: 100%;
      flex: 1;
    }

    &__title {
      font-size: 2rem;
      color: var(--color-6);

      &--empty {
        &::before {
          content: "Sem título";
          opacity: 0.2;
        }
      }
    }
  }
</style>
