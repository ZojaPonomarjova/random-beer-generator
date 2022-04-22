<template>
  <div class="content-container">
    <div>
      <BeerDescriptionItem description="brand" :mainText="randomBeer.brand" />
      <BeerDescriptionItem description="name" :mainText="randomBeer.name" />
      <BeerDescriptionItem description="style" :mainText="randomBeer.style" />
      <BeerDescriptionItem description="hop" :mainText="randomBeer.hop" />
      <BeerDescriptionItem description="yeast" :mainText="randomBeer.yeast" />
      <BeerDescriptionItem description="malts" :mainText="randomBeer.malts" />
      <BeerDescriptionItem description="ibu" :mainText="randomBeer.ibu" />
      <BeerDescriptionItem
        description="alcohol"
        :mainText="randomBeer.alcohol"
      />
      <BeerDescriptionItem description="blg" :mainText="randomBeer.blg" />
    </div>
    <ButtonComponent
      buttonText="Попробовать снова"
      anotherClass="tryAgainButton"
      v-on:handleClick="onClickGetBeer"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
.main-title {
  font-family: "Roboto-Bold";
  font-size: 30px;
  font-weight: 700;
  font-style: normal;

  color: $orange;
  letter-spacing: 1.5px;

  margin: 20px 0 20px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: fit-content;
}

.tryAgainButton {
  margin-top: 40px;
  margin-left: -60px;
  margin-bottom: 20px;
}
</style>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import BeerDescriptionItem from "@/components/BeerDescriptionItem";
import { mapActions } from "vuex";

export default {
  name: "BeerDescription",
  props: {},

  computed: {
    errorText() {
      return this.$store.state.errorTextForBeer;
    },
    randomBeer() {
      return this.$store.state.beer;
    },
  },
  methods: {
    ...mapActions({
      onClickGetBeer: "GET_RANDOM_BEER",
    }),
  },
  components: {
    ButtonComponent,
    BeerDescriptionItem,
  },
};
</script>
