<template>
  <div class="checkbox">
    <p class="checkbox__label">{{ props.label }}</p>
    <empty-component
      class="checkbox__empty"
      :title="props.emptyPhrase"
      v-if="isEmpty"
    />
    <div class="checkbox__options" v-else>
      <label v-for="item in checkboxValues" :key="item[objectKeyValue]">
        <input
          class="checkbox__check"
          v-model="values"
          type="checkbox"
          :value="item[objectKeyValue]"
        />
        <component
          class="checkbox__option"
          :is="props.component"
          v-bind="item"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import EmptyComponent from "@/components/utils/empty-component.vue";

  import { computed, ref, watch } from "vue";

  interface Props {
    checkboxValues: { [key: string]: any }[];
    component: any;
    label: string;
    objectKeyValue: string;
    emptyPhrase: string;
    values?: string[];
  }

  const props = withDefaults(defineProps<Props>(), { values: () => [] });

  interface Emit {
    (e: "update:value", value: string[]): void;
  }

  const emit = defineEmits<Emit>();

  const values = ref<string[]>(props.values);

  watch(values, (state) => emit("update:value", state));

  const isEmpty = computed(() => props.checkboxValues.length === 0);
</script>

<style lang="scss" scoped>
  .checkbox {
    overflow: hidden;

    &__label {
      text-transform: lowercase;
      font-size: 1rem;
      color: var(--color-6);
      &::first-letter {
        text-transform: capitalize;
      }
    }

    &__options {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
      gap: 15px;

      margin-top: 15px;
      margin-bottom: 15px;

      overflow-y: scroll;
      box-sizing: content-box;
      margin-right: -20px;
      padding-right: 20px;

      width: 100%;
      max-height: 800px;
    }

    &__check {
      display: none;

      &:checked {
        + .checkbox__option {
          border: 4px solid var(--color-5);
          scale: 0.98;
        }
      }
    }

    &__option {
      border: 4px solid transparent;
      transition: 200ms;
    }

    &__empty {
      margin-top: 100px;
    }
  }
</style>
