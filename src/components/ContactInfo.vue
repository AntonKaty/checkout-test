<template>
  <section class="section">
    <SectionTitle title="Contact information" />
    <q-input outlined v-model="email" placeholder="Email Address" class="q-mb-lg" type="email">
      <template v-slot:prepend>
        <img src="../assets/images/envelope.svg" alt="envelope" />
      </template>
    </q-input>
    <q-input outlined v-model="phone" placeholder="Phone Number" class="q-mb-lg" type="number">
      <template v-slot:prepend>
        <img src="../assets/images/phone-call.svg" alt="phone call" />
      </template>
    </q-input>
    <q-checkbox v-model="newsletterSubscribed" color="gray" class="text-gray">Sign up for exclusive offers and
      news</q-checkbox>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  components: { SectionTitle },
  data: () => ({
    email: ''
  })
}

</script>

<style lang="scss" scoped></style>
