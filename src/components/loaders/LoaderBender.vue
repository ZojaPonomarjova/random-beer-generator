/*лоадер с Бендером */
<template>
  <div class="loader-img-container">
    <img src="assets/images/bender.gif" alt="Bender" class="loader-image" />
  </div>
</template>

<style scoped lang="scss">
.loader-img-container {
  margin: 0px auto;
  width: 47.5%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
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
