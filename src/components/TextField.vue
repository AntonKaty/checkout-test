<template>
  <div class="input-wrapper">
    <img src="../assets/images/envelope.svg" alt="Enevelope" class="input-wrapper__prepend" />
    <input type="text" class="input-wrapper__input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextField',
});
</script>

<style lang="scss" scoped>
.input-wrapper {
  border: 1px solid #d6d8ee;
  border-radius: 16px;
  padding: 18px 25px;
  display: flex;
  align-items: center;

  &__prepend {
    margin-right: 15px;
  }
}
</style>
