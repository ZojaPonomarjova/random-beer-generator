<template>
  <div class="content-container">
    <div>
      <BeerDescriptionItem description="brand" :mainText="brand" />
      <BeerDescriptionItem description="name" :mainText="name" />
      <BeerDescriptionItem description="style" :mainText="style" />
      <BeerDescriptionItem description="hop" :mainText="hop" />
      <BeerDescriptionItem description="yeast" :mainText="yeast" />
      <BeerDescriptionItem description="malts" :mainText="malts" />
      <BeerDescriptionItem description="ibu" :mainText="ibu" />
      <BeerDescriptionItem description="alcohol" :mainText="alcohol" />
      <BeerDescriptionItem description="blg" :mainText="blg" />
    </div>
    <ButtonComponent
      buttonText="Попробовать снова"
      anotherClass="tryAgainButton"
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
import { beer } from "../data/beer";

export default {
  name: "BeerDescription",
  props: {
    // product: String,
    // image: String,
    // inStock: Boolean,
  },
  data() {
    return {
      brand: beer.brand,
      name: beer.name,
      style: beer.style,
      hop: beer.hop,
      yeast: beer.yeast,
      malts: beer.malts,
      ibu: beer.ibu,
      alcohol: beer.alcohol,
      blg: beer.blg,
    };
  },
  components: {
    ButtonComponent,
    BeerDescriptionItem,
  },
};
</script>
