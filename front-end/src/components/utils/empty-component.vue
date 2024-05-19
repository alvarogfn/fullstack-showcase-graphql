<template>
  <div class="empty">
    <h1 class="empty__title">{{ props.title }}</h1>
    <icon-empty class="empty__icon" />
  </div>
</template>

<script setup lang="ts">
  import IconEmpty from "@/components/icons/icon-empty.vue";

  interface Props {
    title?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    title: "Essa lista está vazia.",
  });
</script>

<style lang="scss" scoped>
  .empty {
    max-width: fit-content;

    color: var(--color-6);

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    row-gap: 10px;

    margin: 0 auto;

    &__title {
      font-size: 1rem;
      font-weight: 300;
    }

    &__icon {
      fill: var(--color-6);
      width: 100px;
      height: 100px;
    }
  }
</style>
