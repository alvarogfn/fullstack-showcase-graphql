<template>
  <div class="error">
    <h1 class="error__title">
      {{ props.title }}
    </h1>
    <p class="error__paragraph" v-if="props.message?.description">
      {{ props.message.description }}
    </p>
    <code class="error__code" v-if="props.message?.error">
      {{ props.message?.error }}
    </code>
    <p class="error__paragraph error__paragraph--contact">
      Se o erro persistir, por favor,
      <a class="error__anchor">entre em contato conosco</a>.
    </p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title?: string;
    message?: {
      description?: string;
      error?: string;
    };
  }

  const props = withDefaults(defineProps<Props>(), {
    title: " Alguma coisa deu errado.",
  });
</script>

<style lang="scss" scoped>
  .error {
    color: var(--color-6);

    display: flex;
    flex-flow: column nowrap;

    margin: 0 auto;

    width: fit-content;
    max-width: 600px;

    &__title {
      display: flex;
      flex-flow: row nowrap;
      column-gap: 10px;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    &__paragraph {
      text-align: justify;
      margin-top: 5px;

      &--contact {
        white-space: initial;
        margin-top: 20px;
      }
    }

    &__anchor {
      cursor: pointer;
      text-decoration: underline;
    }

    &__code {
      margin: 20px 0 0;

      font-family: monospace;

      background-color: var(--color-2);
      padding: 10px 5px;
      border-radius: 5px;
    }
  }
</style>
