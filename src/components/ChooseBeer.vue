<template>
  <div class="content-container">
    <h2 class="main-title">Генератор случайного пива</h2>
    <ButtonComponent
      v-if="chooseButtonIsClicked && !isLoading"
      buttonText="Испытать удачу"
      anotherClass="chooseButton"
    />
    <BeerDescription v-if="!chooseButtonIsClicked && !isLoading" />
    <LoaderBender v-if="isLoading" />
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

  margin: 20px 0 40px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import LoaderBender from "@/components/LoaderBender.vue";
import BeerDescription from "@/components/BeerDescription.vue";

export default {
  name: "ChooseBeer",
  props: {
    // product: String,
    // image: String,
    // inStock: Boolean,
  },
  data() {
    return {
      isLoading: false,
      chooseButtonIsClicked: false,
    };
  },
  components: {
    ButtonComponent,
    LoaderBender,
    BeerDescription,
  },
};
</script>
