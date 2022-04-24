/*лоадер с Бендером */
<template>
  <div class="loader-img-container">
    <img src="assets/images/bender.gif" alt="Bender" class="loader-image" />
  </div>
</template>

<style scoped lang="scss">
.loader-img-container {
  margin: 0px auto;
  width: 49%;
}

.loader-image {
  max-width: 100%;
}
</style>

<script>
export default {
  name: "LoaderBender",
};
</script>
