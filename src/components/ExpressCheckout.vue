<template>
  <div class="express-checkout">
    <h5 class="express-checkout__title">Express Checkout</h5>
    <div class="express-checkout__items">
      <q-btn class="express-checkout__link" unelevated>
        <img src="../assets/images/shop-pay.svg" alt="Shop Pay" width="84" height="20" />
      </q-btn>
      <q-btn class="express-checkout__link" unelevated>
        <img src="../assets/images/paypal.png" alt="PayPal" width="82" height="20" />
      </q-btn>
      <q-btn class="express-checkout__link express-checkout__link_unavailable" unelevated disable>
        <img src="../assets/images/gpay.png" alt="Google pay" width="50" height="20" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.express-checkout {
  border: 1px solid #d6d8ee;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 20px;

  &__title {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: $dark-blue;
    margin-top: 0;
    margin-bottom: 20px;
  }

  &__items {
    display: flex;
    column-gap: 20px;
  }

  &__link {
    border-radius: 16px;
    border: 1px solid #5a31f499;
    background-color: #5a31f41a;
    width: 147px;
    height: 50px;

    &_unavailable {
      border-color: #ea403299;
      background-color: rgba(234, 64, 50, 0.1);
    }
  }
}
</style>
