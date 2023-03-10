<template>
  <section class="section">
    <h4 class="section__title q-mb-xs">Billing address</h4>
    <h5 class="section__subtitle">
      Specify the address for your payment option
    </h5>
    <p class="q-mb-lg">
      <q-radio v-model="billingAddress" val="Same as shipping address" label="Same as shipping address" color="gray"
        class="custom-radio-input" />
    </p>
    <p class="q-mb-lg">
      <q-radio v-model="billingAddress" val="Use a different billing address" label="Use a different billing address"
        color="gray" class="custom-radio-input" />
    </p>
  </section>
</template>

<script>
export default {
  data: () => ({
    billingAddress: 'Same as shipping address'
  })
}
</script>


