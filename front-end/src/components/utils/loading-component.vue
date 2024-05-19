<template>
  <div class="container">
    <div class="container__square"></div>
    <div class="container__square"></div>
    <div class="container__square"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @keyframes push_square {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    40% {
      transform: translateX(0px);
      opacity: 1;
    }
    60% {
      transform: translateX(0px);
      opacity: 1;
    }
    100% {
      transform: translateX(50px);
      opacity: 0;
    }
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    width: max-content;
    height: max-content;

    &__square {
      height: 50px;
      width: 50px;
      background-color: var(--color-6);

      animation-name: push_square;
      animation-iteration-count: infinite;

      opacity: 0;

      &:nth-child(1) {
        animation-duration: 2s;
        animation-delay: 0ms;
        animation-timing-function: ease-in-out;
      }

      &:nth-child(2) {
        animation-duration: 2s;
        animation-delay: 300ms;
        animation-timing-function: ease-in-out;
      }

      &:nth-child(3) {
        animation-duration: 2s;
        animation-delay: 600ms;
        animation-timing-function: ease-in-out;
      }

      // @for $square from 1 through 3 {
      //   &:nth-child(#{$square}) {
      //     animation-duration: calc(#{$square} * 200ms);
      //     animation-delay: calc(#{$square} * 200ms);
      //     animation-direction: normal, reverse;
      //     animation-iteration-count: infinite;
      //   }
      // }
    }
  }
</style>
