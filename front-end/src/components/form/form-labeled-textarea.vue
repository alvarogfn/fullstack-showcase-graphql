<template>
  <form-product-label :label="props.label">
    <textarea
      class="input"
      v-bind="$attrs"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    ></textarea>
  </form-product-label>
</template>

<script setup lang="ts">
  import FormProductLabel from "./form-labeled-label.vue";

  interface Props {
    label: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .input {
    background-color: var(--color-2);
    padding: 10px;
    border-radius: 5px;
    resize: vertical;
    min-height: 85px;

    transition: 300ms;

    &:focus {
      background-color: var(--color-3);
    }
  }
</style>
