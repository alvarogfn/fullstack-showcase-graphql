<template>
  <form-product-label :label="props.label">
    <select
      class="input"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      :value="props.value"
    >
      <option disabled selected>{{ props.placeholder }}</option>
      <option v-for="(item, index) in options" :key="index" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </form-product-label>
</template>

<script setup lang="ts">
  import FormProductLabel from "./form-labeled-label.vue";

  interface Props {
    value: string;
    label: string;
    placeholder?: string;
    options?: {
      label: string;
      value: string;
    }[];
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => [],
  });
</script>

<style lang="scss" scoped>
  .input {
    background-color: var(--color-2);
    padding: 10px;
    border-radius: 5px;

    transition: 300ms;

    &:focus {
      background-color: var(--color-3);
    }
  }
</style>
