<template>
  <section class="showcase">
    <title-component class="showcase__title">
      Criar Nova Seção de Produtos
    </title-component>
    <form-showcase
      class="showcase__form"
      :form="form"
      @submit="submit($event)"
    />
  </section>
</template>

<script setup lang="ts">
  import TitleComponent from "@/components/utils/title-component.vue";
  import { useMutation } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { reactive } from "vue";
  import FormShowcase from "@/components/form/form-showcase.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const form = reactive({
    name: "",
    description: "",
    products: [] as string[],
  });

  interface Mutation {
    createShowcase: {
      id: string;
    };
  }

  const { mutate: createShowcase, onDone } = useMutation<Mutation>(
    gql`
      mutation createShowcase($input: ShowcaseInput) {
        createShowcase(input: $input) {
          id
        }
      }
    `
  );

  function submit(form: {
    name: string;
    description: string;
    products: string[];
  }) {
    createShowcase({
      input: form,
    });

    onDone((result) =>
      router.replace({
        name: "showcase",
        params: { id: result.data?.createShowcase.id },
      })
    );
  }
</script>

<style lang="scss" scoped>
  .showcase {
    margin: 20px auto;

    width: calc(100vw - 50px);

    display: flex;
    flex-flow: column nowrap;
    row-gap: 30px;

    &__title {
      font-size: 2rem;
    }

    &__form {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 20px;
    }
  }
</style>
