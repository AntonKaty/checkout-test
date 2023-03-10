<template>
  <section class="section">
    <h5 class="section__title">Shipping address</h5>
    <q-select outlined v-model="country" :options="options" :dense="dense" :options-dense="denseOpts" class="q-mb-lg">
      <template v-slot:prepend>
        <img src="../assets/images/location.svg" alt="Location" />
      </template>
    </q-select>
    <div class="row">
      <div class="col q-mr-lg">
        <q-input outlined v-model="ph" :dense="dense" placeholder="First Name" class="q-mb-lg">
          <template v-slot:prepend>
            <img src="../assets/images/user.svg" alt="user" />
          </template>
        </q-input>
      </div>
      <div class="col">
        <q-input outlined v-model="ph" :dense="dense" placeholder="Last Name" class="q-mb-lg">
          <template v-slot:prepend>
            <img src="../assets/images/user.svg" alt="user" />
          </template>
        </q-input>
      </div>
    </div>
    <q-input outlined v-model="ph" :dense="dense" placeholder="Address" class="q-mb-lg">
      <template v-slot:prepend>
        <img src="../assets/images/home-location.svg" alt="home location" />
      </template>
    </q-input>
    <q-input outlined v-model="ph" :dense="dense" placeholder="Aparment, suit, etc (Optional)" class="q-mb-lg">
      <template v-slot:prepend>
        <img src="../assets/images/building.svg" alt="building" />
      </template>
    </q-input>
    <div class="row">
      <div class="col q-mr-lg">
        <q-input outlined v-model="ph" :dense="dense" placeholder="City" />
      </div>
      <div class="col">
        <q-input outlined v-model="ph" :dense="dense" placeholder="Post Code" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
