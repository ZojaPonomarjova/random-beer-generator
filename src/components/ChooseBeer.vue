<template>
  <div class="content-container">
    <h2 class="main-title">Генератор случайного пива</h2>
    <ButtonComponent
      v-if="!chooseButtonIsClicked && !isLoading"
      buttonText="Испытать удачу"
      anotherClass="choose-button"
      v-on:handleClick="onClickGetBeer"
    />
    <div v-if="errorForBeer" class="error-text">{{ errorForBeer }}</div>
    <BeerDescription
      v-if="chooseButtonIsClicked && !isLoading && !errorForBeer"
    />
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
  letter-spacing: 1.5px;

  color: $orange;

  margin: 20px 0 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 70px 10px 30px 10px;
  }
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-text {
  margin-top: 100px;
  text-align: center;

  font-family: "OpenSans-Regular";
  font-weight: 400;
  font-style: normal;
  font-size: 20px;

  color: $orange;
}
</style>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import LoaderBender from "@/components/LoaderBender.vue";
import BeerDescription from "@/components/BeerDescription.vue";
import { mapActions } from "vuex";

export default {
  name: "ChooseBeer",
  props: {},
  data() {
    return {
      // isLoading: false,
      // chooseButtonIsClicked: false,
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    chooseButtonIsClicked() {
      return this.$store.state.chooseButtonIsClicked;
    },
    errorForBeer() {
      return this.$store.state.errorTextForBeer;
    },
  },
  methods: {
    ...mapActions({
      onClickGetBeer: "GET_RANDOM_BEER",
    }),
  },
  components: {
    ButtonComponent,
    LoaderBender,
    BeerDescription,
  },
};
</script>
