<template>
  <form class="form" @submit.prevent="submit">
    <form-labeled-input
      class="form__input form__input--name"
      label="nome"
      required
      v-model:value="form.name"
    />
    <form-labeled-input
      class="form__input form__input--price"
      label="Preço"
      v-model:value="form.price"
      :mask="PersonalMasks.BRL"
      required
    />
    <form-labeled-textarea
      class="form__input form__input--description"
      label="Descrição"
      v-model:value="form.description"
      required
    />

    <form-image-input
      label="Link da Imagem"
      placeholder="https://alguma.imagem.png"
      class="form__input form__input--image"
      v-model:value="form.image"
      required
    />
    <button-component class="form__submit">Enviar</button-component>
  </form>
</template>

<script setup lang="ts">
  import FormLabeledInput from "./form-labeled-input.vue";
  import FormLabeledTextarea from "./form-labeled-textarea.vue";
  import FormImageInput from "./form-image-input.vue";
  import ButtonComponent from "@/components/button/button-component.vue";
  import { reactive } from "vue";
  import { PersonalMasks } from "@/utils/PersonalMasks";

  interface Props {
    form?: {
      name: string;
      description: string;
      price: string;
      image: string;
    };
  }

  interface Emits {
    (e: "submit", value: typeof props.form): void;
  }

  const emit = defineEmits<Emits>();

  const props = withDefaults(defineProps<Props>(), {
    form: () => ({
      name: "",
      description: "",
      image: "",
      price: "",
    }),
  });

  const form = reactive({
    name: props.form.name,
    description: props.form.description,
    price: props.form.price,
    image: props.form.image,
  });

  function submit() {
    emit("submit", form);
  }
</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 20px;
  }

  @media screen and (min-width: 900px) {
    .form {
      display: grid;
      grid-template-columns: 6fr 4fr;
      gap: 15px;

      &__input {
        &--name {
          grid-column: 1 / 2;
        }

        &--price {
          grid-column: 1 / 2;
        }

        &--description {
          grid-column: 1 / 2;
        }

        &--image {
          max-height: 350px;
          grid-row: 1 / 5;
          grid-column: 2 / 3;
        }
      }

      &__submit {
        grid-column: 1 / 2;
        max-width: 300px;
        max-height: 50px;
        margin-top: 30px;
      }
    }
  }
</style>
