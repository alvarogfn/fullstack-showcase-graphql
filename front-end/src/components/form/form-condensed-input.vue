<template>
  <label
    class="label"
    :class="{
      'label--open': isLabelOpen || openLabel || props.value.length > 0,
    }"
  >
    <transition-fade>
      <span
        class="label__text"
        v-if="isLabelOpen || openLabel || props.value.length > 0"
      >
        {{ props.label }}
      </span>
    </transition-fade>
    <input
      class="label__input"
      @focus="isLabelOpen = true"
      :placeholder="props.placeholder"
      @blur="isLabelOpen = false"
      :value="props.value"
      :required="required"
      @input="emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import TransitionFade from "../transition/transition-fade.vue";

  interface Props {
    label?: string;
    required?: boolean;
    value?: string;
    placeholder?: string;
    openLabel?: boolean;
  }

  interface Emit {
    (e: "update:value", value: string): void;
  }

  const props = withDefaults(defineProps<Props>(), { value: "" });
  const emit = defineEmits<Emit>();

  const isLabelOpen = ref<boolean>(false);
</script>

<style lang="scss" scoped>
  .label {
    position: relative;

    flex: 1;
    display: flex;
    padding: 15px;

    transition: padding 200ms ease-in-out;

    &--open {
      padding-top: 30px;
    }

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
    }
  }
</style>
