<template>
  <div class="reserved">
    <p class="reserved__text">
      Your cart is reserved for 10:00 minutes.
    </p>
  </div>
</template>

<style scoped lang="scss">
.reserved {
  background-color: #ebecf3;
  border-radius: 16px;
  padding: 18px 25px;
  margin-bottom: 30px;

  &__text {
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 20px;
    color: $grey-text;
    margin: 0;
    font-size: 16px;
  }
}
</style>
