<template>
  <img
    v-bind="$attrs"
    :src="props.src"
    :class="{ error }"
    :alt="error ? 'Não foi possível carregar a imagem' : props.alt"
    @error.once="onLoadError($event)"
  />
</template>

<script setup lang="ts">
  import ImageDefault from "@/assets/default-image.svg";
  import { ref } from "vue";

  interface Props {
    src?: string;
    alt?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    src: ImageDefault,
  });

  const error = ref<boolean>(false);

  function onLoadError(event: Event) {
    const element = event.target as HTMLImageElement;
    error.value = true;
    element.src = ImageDefault;
  }
</script>

<style scoped>
  .error {
    padding: 10px;

    font-size: 0.75rem;

    height: 100%;
    width: 100%;

    fill: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none !important;
  }
</style>
