/*корневой компонент для секции с пивом */
<template>
  <div class="content-container">
    <h2 class="main-title">Генератор случайного пива</h2>
    <div
      v-if="!chooseButtonIsClicked && !isLoading"
      class="choose-button-container"
    >
      <ButtonComponent
        buttonText="Испытать удачу"
        anotherClass="choose-button"
        v-on:handleClick="onClickGetBeer"
      />
      <img
        src="assets\images\futurama_PNG70.png"
        alt="Bender"
        class="main-image"
      />
    </div>
    <div v-if="errorForBeer" class="error-text">{{ errorForBeer }}</div>
    <BeerDescription
      v-if="chooseButtonIsClicked && !isLoading && !errorForBeer"
    />
    <LoaderBender v-if="isLoading" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import LoaderBender from "@/components/loaders/LoaderBender.vue";
import BeerDescription from "@/components/componentsForBeerSection/BeerDescription.vue";
import { mapActions } from "vuex";

export default {
  name: "ChooseBeer",

  computed: {
    //состояние для индикатора загрузки
    isLoading() {
      return this.$store.getters.isLoading;
    },
    //состояние для переключения между первым экраном и описанием пива
    chooseButtonIsClicked() {
      return this.$store.getters.chooseButtonIsClicked;
    },
    //состояние для ошибки при загрузке
    errorForBeer() {
      return this.$store.getters.errorTextForBeer;
    },
  },
  methods: {
    ...mapActions({
      onClickGetBeer: "getRandomBeer",
    }),
  },
  components: {
    ButtonComponent,
    LoaderBender,
    BeerDescription,
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
.choose-button-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image {
  align-self: flex-end;
  max-width: 200px;
  @media screen and (max-width: 768px) {
    max-width: 40vw;

    margin-top: 20px;
    margin-right: -20px;
  }
}
</style>
