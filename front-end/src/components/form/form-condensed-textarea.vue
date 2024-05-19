<template>
  <label class="label">
    <transition-fade>
      <span
        class="label__text"
        v-if="isLabelOpen || openLabel || props.value.length > 0"
        >{{ props.label }}</span
      >
    </transition-fade>
    <textarea
      class="label__input"
      @focus="isLabelOpen = true"
      @blur="isLabelOpen = false"
      :value="props.value"
      :required="required"
      :placeholder="props.placeholder"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    ></textarea>
  </label>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import TransitionFade from "../transition/transition-fade.vue";

  interface Props {
    label?: string;
    value: string;
    required?: boolean;
    placeholder?: string;
    openLabel?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    openLabel: false,
  });

  const isLabelOpen = ref<boolean>(false);
</script>

<style lang="scss" scoped>
  .label {
    position: relative;

    flex: 1;
    display: flex;
    padding: 30px 15px 15px;

    &__text {
      color: var(--color-6);
      position: absolute;
      font-size: 0.8rem;
      top: 5px;
      left: 5px;
      opacity: 0.9;
    }

    &__input {
      flex: 1;
      color: var(--color-6);
      resize: vertical;
    }
  }
</style>
