<template>
  <div class="lifetime-warranty">
    <div class="lifetime-warranty__col">
      <h5 class="lifetime-warranty__title">Lifetime Warranty🔥</h5>
      <p class="lifetime-warranty__text">
        Add a lifetime warranty & enjoy peace of mind for life with your
        dream collections order for just $4.99
      </p>
    </div>
    <div class="lifetime-warranty__col">
      <q-btn class="dark-blue-button">Add- $4.99</q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lifetime-warranty {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-radius: 16px;
  background-color: rgba(151, 154, 184, 0.1);
  margin-bottom: 50px;

  &__title {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: $dark-blue;
    margin-top: 0;
    margin-bottom: 7px;
  }

  &__text {
    color: $grey-text;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Poppins';
    margin-bottom: 0;
  }
}

.dark-blue-button {
  border-radius: 10px;
  background-color: $dark-blue;
  padding: 18px 40px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
}
</style>
