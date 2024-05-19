<template>
  <form class="form" @submit.prevent="submit">
    <form-labeled-input label="Nome" v-model:value="form.name" required />
    <form-labeled-textarea
      label="Descrição"
      v-model:value="form.description"
      required
    />
    <loading-component class="form__loading" v-if="loading" />
    <error-component class="form__error" v-else-if="error !== null" />
    <form-card-checkbox
      v-else
      :checkboxValues="products"
      empty-phrase="Não há produtos a serem selecionados, que tal criar alguns?"
      label="Selecione Os Produtos"
      :component="ProductOptionCard"
      object-key-value="id"
      :values="form.products"
      v-model:value="form.products"
    />
    <button-component class="form__submit">Enviar</button-component>
  </form>
</template>

<script setup lang="ts">
  import FormLabeledInput from "@/components/form/form-labeled-input.vue";
  import FormLabeledTextarea from "@/components/form/form-labeled-textarea.vue";
  import FormCardCheckbox from "@/components/form/form-card-checkbox.vue";
  import ProductOptionCard from "@/components/product/product-option-card.vue";
  import { useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import ButtonComponent from "@/components/button/button-component.vue";
  import { computed, onMounted, reactive } from "vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";
  import type { Product } from "@/models/Product";

  interface Props {
    form: {
      name?: string;
      description?: string;
      products: string[];
    };
  }

  const props = defineProps<Props>();

  interface Emits {
    (
      e: "submit",
      value: { name: string; description: string; products: string[] }
    ): void;
  }

  const emit = defineEmits<Emits>();

  const form = reactive({
    name: props.form.name ?? "",
    description: props.form.description ?? "",
    products: props.form.products ?? "",
  });

  function submit() {
    emit("submit", form);
  }

  interface Query {
    products: Product[];
  }

  const { result, loading, error, refetch } = useQuery<Query>(gql`
    query showcaseFormViewGetProducts {
      products {
        name
        price
        description
        id
        image
      }
    }
  `);

  const products = computed(() => result.value?.products!);

  onMounted(() => refetch());
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-flow: column nowrap;

    gap: 20px;

    &__loading {
      align-self: center;
      margin: 100px 0;
    }

    &__submit {
      height: 50px;
      width: 200px;
      align-self: flex-end;
    }
  }
</style>
