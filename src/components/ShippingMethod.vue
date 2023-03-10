<template>
  <section class="section">
    <h5 class="section__title">Shipping method</h5>
    <p class="q-mb-lg">
      <q-radio v-model="shippingMethod" val="Free Shipping" label="Free Shipping" color="gray"
        class="custom-radio-input" />
    </p>
    <p class="q-mb-lg">
      <q-radio v-model="shippingMethod" val="DHL with price" label="DHL with price" color="gray"
        class="custom-radio-input" />
    </p>
  </section>
</template>

<script>
export default {
  data: () => ({ shippingMethod: 'Free Shipping' })
}
</script>
