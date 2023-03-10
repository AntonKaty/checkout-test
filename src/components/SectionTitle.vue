<template>
  <h4 class="section-title">
    {{ title }}
  </h4>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.section-title {
  font-weight: 500;
  line-height: 34px;
  color: $dark-blue;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>
