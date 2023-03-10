<template>
  <div class="box">
    <SectionTitle title="Order Summary" />
    <div class="cart">
      <div class="cart__item">
        <div class="cart__item-col">
          <div class="cart__img-wrapper">
            <img src="../assets/images/nike-sneakers.png" alt="Nike sneakers" class="cart__img" width="55" height="55" />
            <q-badge rounded color="gray" label="1" floating />
          </div>
          <div class="cart__item-name">Nike sneakers</div>
        </div>
        <div class="cart__item-col">
          <div class="cart__item-price">€69.00</div>
        </div>
      </div>
      <div class="discount">
        <div class="discount__col">
          <q-input outlined v-model="discountCode" :dense="dense" placeholder="Discount" />
        </div>
        <div class="discount__col">
          <q-btn class="dark-blue-button">Apply</q-btn>
        </div>
      </div>
      <div class="totals">
        <p class="total">
          <span class="total__name">Subtotal</span><span class="total__price">€69.00</span>
        </p>
        <p class="total">
          <span class="total__name">Shipping</span><span class="total__price">--</span>
        </p>
        <p class="total">
          <span class="total__name">Discount</span><span class="total__price">--</span>
        </p>
        <p class="total__divider"></p>
        <p class="total">
          <span class="total__name">Total</span><span class="total__price">€69.00</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  components: {
    SectionTitle,
  },
  data: () => ({
    discountCode: ''
  })
}
</script>
