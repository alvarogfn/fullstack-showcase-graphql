<template>
  <div class="details">
    <title-component class="details__title">{{ props.name }}</title-component>
    <p class="details__description">{{ props.description }}</p>
    <nav class="details__nav">
      <button-icon
        @click="deleteShowcase({ id: props.id })"
        :icon="IconDelete"
      />
      <router-link
        class="details__edit"
        :to="{ name: 'showcase-edit', params: { id: props.id } }"
      >
        <button-icon :icon="IconEdit"></button-icon>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import TitleComponent from "../utils/title-component.vue";
  import ButtonIcon from "../button/button-icon.vue";
  import IconDelete from "../icons/icon-delete.vue";
  import IconEdit from "../icons/icon-edit.vue";
  import { useMutation } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { useRouter } from "vue-router";

  const router = useRouter();

  interface Props {
    name: string;
    description: string;
    id: string;
  }

  const props = defineProps<Props>();

  const { mutate: deleteShowcase, onDone } = useMutation(
    gql`
      mutation deleteShowcase($id: ID!) {
        deleteShowcase(id: $id)
      }
    `
  );

  onDone(() => router.push({ name: "home" }));
</script>

<style lang="scss" scoped>
  .details {
    position: relative;

    &__description {
      color: var(--color-6);
    }

    &__nav {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-flow: row nowrap;
      gap: 10px;
    }

    &__edit {
      display: flex;
    }
  }
</style>
