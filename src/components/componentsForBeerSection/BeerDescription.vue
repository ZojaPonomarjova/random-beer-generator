/*компонент для описания характеристик пива */
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

<script>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import BeerDescriptionItem from "@/components/componentsForBeerSection/BeerDescriptionItem.vue";
import { mapActions } from "vuex";

export default {
  name: "BeerDescription",
  props: {},

  computed: {
    //состояние для ошибки при загрузке
    errorText() {
      return this.$store.getters.errorTextForBeer;
    },
    //состояние для описания пива
    randomBeer() {
      return this.$store.getters.beer;
    },
  },
  methods: {
    ...mapActions({
      onClickGetBeer: "getRandomBeer",
    }),
  },
  components: {
    ButtonComponent,
    BeerDescriptionItem,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars.scss";
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

  width: fit-content;
  height: fit-content;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }

  div {
    width: fit-content;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
}

.tryAgainButton {
  margin-top: 40px;
  margin-left: -60px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
}
</style>
