<template>
  <p class="beer-description-text">
    <span class="thin-text" v-if="description">{{ description }}</span
    ><span v-if="mainText" class="bold-text">{{ mainText }}</span>
  </p>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
.beer-description-text {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  padding: 30px 0px 0px 50px;
  margin: 0;
}

.thin-text {
  font-family: "OpenSans-Regular";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;

  color: #999996;

  margin-bottom: 5px;
  margin-right: 50px;
  min-width: 50px;
}

.bold-text {
  font-family: "OpenSans-Bold";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;

  color: $almostWhite;
}
</style>

<script>
export default {
  name: "BeerDescriptionItem",
  props: {
    description: String,
    mainText: String,
  },
};
</script>
