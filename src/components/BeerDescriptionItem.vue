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
  flex-direction: row;

  flex-wrap: wrap;
  align-items: flex-start;

  padding: 30px 0px 0px 50px;
  margin: 0;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px 0px 0px 0px;
  }
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

  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
}

.bold-text {
  font-family: "OpenSans-Bold";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;

  color: $almostWhite;

  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
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
