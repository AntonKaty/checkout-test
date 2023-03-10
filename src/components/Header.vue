<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="Logo" />
      <h4 class="logo__name">
        <span class="text-weight-bold">Rebillion.</span>io
      </h4>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px;
  background-color: #050824;
}

.logo {
  margin-left: 25%; // redo
  display: flex;
  align-items: center;
  &__name {
    margin: 0;
    font-size: 18px;
    margin-left: 12px;
    color: #fff;
  }
}
</style>
