<template>
  <div class="image">
    <form-condensed-input
      :label="props.label"
      :placeholder="props.placeholder"
      v-model:value.lazy="value"
      class="image__input"
      :required="required"
    />
    <image-component class="image__img" :src="value" />
  </div>
</template>

<script setup lang="ts">
  import FormCondensedInput from "./form-condensed-input.vue";
  import ImageComponent from "@/components/utils/image-component.vue";
  import { ref, watch } from "vue";

  interface Props {
    label: string;
    value: string;
    required?: boolean;
    placeholder?: string;
  }

  interface Emit {
    (e: "update:value", value: string): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emit>();

  const value = ref<string>(props.value);

  watch(value, (newValue) => emit("update:value", newValue));
</script>

<style lang="scss" scoped>
  .image {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 8fr;
    overflow: hidden;
    background-color: var(--color-2);

    border-radius: 5px;

    padding: 0 10px 10px;

    &__input {
      max-height: 80px;
    }

    &__img {
      align-self: center;

      max-width: 300px;
      max-height: 300px;

      width: 100%;
      height: 100%;

      justify-self: center;

      object-fit: contain;
    }
  }
</style>
