<template>
  <AppHeader />
  <main class="wrapper">
    <div class="container row q-col-gutter-lg">
      <div class="col-7">
        <div class="box">
          <h4 class="title">Checkout</h4>
          <h5 class="box__subtitle">
            Strong demand! Complete your order before it's too late!
          </h5>
          <Reserved />
          <ExpressCheckout />
          <LifetimeWarranty />
          <ContactInfo />
          <ShippingAddress />
          <ShippingMethod />
          <BillingAddress />
        </div>
      </div>
      <div class="col-5">
        <OrderSummary />
        <div class="box">
          <div class="secure-guarantee">
            <p>
              <img src="../../assets/images/lock.svg" alt="lock" />&nbsp;
              <span>Secure SSL Encryption & Guaranteed Safe Checkout</span>
            </p>
            <p>
              <img src="../../assets/images/mastercard.svg" alt="mastercard" />
              <img src="../../assets/images/visa.svg" alt="visa" />
              <img src="../../assets/images/paypal.svg" alt="paypal" />
              <img src="../../assets/images/amex.svg" alt="amex" />
              <img src="../../assets/images/jcb.svg" alt="jcb" />
              <img src="../../assets/images/diners-club-international.svg" alt="diners-club-international" />
            </p>
          </div>
        </div>
        <div class="box">
          <div class="jewellery-club">
            <h4 class="jewellery-club__title">The ultimate jewellery club</h4>
            <h5 class="jewellery-club__subtitle">
              Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices
              tincidunt. Pulvinar sed justo et viverra pellentesque.
            </h5>
            <ul class="jewellery-club__benefits">
              <li>
                <img src="../../assets/images/check.svg" alt="check" />
                <span>Extra 10$ off!</span>
              </li>
              <li>
                <img src="../../assets/images/check.svg" alt="check" /><span>Free shipping on marked club items!</span>
              </li>
              <li>
                <img src="../../assets/images/check.svg" alt="check" /><span>Free returns on marked club items!</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="box">
          <h5 class="box__title">Payment Method</h5>
          <div class="payment-methods">
            <div class="payment-method">
              <div class="payment-method__top">
                <q-radio v-model="paymentMethod" val="Credit Card" label="Credit Card" color="gray"
                  class="custom-radio-input" />
              </div>
              <div class="payment-method__body">
                <p class="q-mb-lg">
                  <q-input outlined v-model="ph" :dense="dense" placeholder="Card number" type="number" bg-color="white">
                    <template v-slot:prepend>
                      <img src="../../assets/images/credit-card.svg" alt="credit card" /> </template></q-input>
                </p>
                <p class="q-mb-lg">
                  <q-input outlined v-model="ph" :dense="dense" placeholder="Name on the card" bg-color="white">
                    <template v-slot:prepend>
                      <img src="../../assets/images/user.svg" alt="user" /> </template></q-input>
                </p>
                <div class="row">
                  <div class="col q-mr-lg">
                    <q-input outlined v-model="ph" :dense="dense" placeholder="MM/YY" type="number" bg-color="white">
                      <template v-slot:prepend>
                        <img src="../../assets/images/calendar.svg" alt="calendar" /> </template></q-input>
                  </div>
                  <div class="col">
                    <q-input outlined v-model="ph" :dense="dense" placeholder="CVV" type="number" bg-color="white">
                      <template v-slot:prepend>
                        <img src="../../assets/images/lock.svg" alt="lock" /> </template></q-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-method">
              <div class="payment-method__top">
                <q-radio v-model="paymentMethod" val="Paypal" label="Paypal" color="gray" class="custom-radio-input" />
                <div class="payment-method__logos">
                  <img src="../../assets/images/paypal.png" alt="PayPal" width="78" height="24" />
                </div>
              </div>
            </div>
            <p class="payment-methods__agreetion">
              <q-checkbox v-model="termsAgreed" color="gray" class="text-gray">By checking this box, I acknowledge that I
                have read and agree
                to the <span class="text-dark">Terms of Service</span>, and
                <span class="text-dark">Monthly Billing Terms</span> of this
                website and want to opt-in for the monthly billed Dream
                Collection Club®</q-checkbox>
            </p>
            <q-btn class="dark-blue-button payment-methods__submit">Complete Purchase</q-btn>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import AppHeader from '../../components/Header.vue'
import Reserved from 'src/components/Reserved.vue';
import ExpressCheckout from '../../components/ExpressCheckout.vue'
import LifetimeWarranty from '../../components/LifetimeWarranty.vue'
import ContactInfo from '../../components/ContactInfo.vue'
import ShippingAddress from '../../components/ShippingAddress.vue'
import ShippingMethod from 'src/components/ShippingMethod.vue';
import BillingAddress from 'src/components/BillingAddress.vue';
import OrderSummary from 'src/components/OrderSummary.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AppHeader,
    Reserved,
    ExpressCheckout,
    LifetimeWarranty,
    ContactInfo,
    ShippingAddress,
    ShippingMethod,
    BillingAddress,
    OrderSummary
  },
  setup() {
    return {
      ph: ref(null),
      options: [],
      dense: ref(false),
      denseOpts: ref(false),
      termsAgreed: ref(false),
      shippingMethod: ref('Free Shipping'),
      billingAddress: ref('Same as shipping address'),
      paymentMethod: ref('Credit Card'),
    };
  },
});
</script>
<style scoped lang="scss">
@import url('./HomePage.scss');
</style>
