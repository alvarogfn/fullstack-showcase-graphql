<template>
  <form-product-label :label="props.label">
    <input
      class="input"
      type="text"
      ref="inputRef"
      :required="required"
      @input="input = ($event.target as HTMLInputElement).value"
    />
  </form-product-label>
</template>

<script setup lang="ts">
  import Imask, { createMask, InputMask, type AnyMaskedOptions } from "imask";
  import FormProductLabel from "./form-labeled-label.vue";
  import { ref, onMounted, onUpdated, watch, computed } from "vue";

  interface Props {
    label: string;
    value: string | number;
    required?: boolean;
    mask?: AnyMaskedOptions;
  }

  interface Emit {
    (e: "update:value", value: string): void;
  }

  const emit = defineEmits<Emit>();

  const props = withDefaults(defineProps<Props>(), {
    mask: () => ({ mask: String }),
  });

  const inputRef = ref<HTMLInputElement | null>(null);
  const input = ref<string>("");

  const inputMask = ref<InputMask<AnyMaskedOptions> | null>(null);

  onMounted(() => {
    if (inputRef.value !== null) {
      const inputMask = Imask(inputRef.value, props.mask);
      inputMask.value = props.value.toString() || "";
    }
  });

  onUpdated(() => {
    if (inputMask.value) inputMask.value.value = props.value.toString() || "";
  });

  const unmasked = computed(() => {
    const maskedValue = createMask(props.mask);
    maskedValue.value = input.value;
    return maskedValue.unmaskedValue;
  });

  watch(unmasked, (newValue) => {
    emit("update:value", newValue);
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
