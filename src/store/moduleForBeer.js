export const moduleForBeer = {
  state: () => ({
    errorTextForBeer: "",
    beer: {
      brand: "",
      name: "",
      style: "",
      hop: "",
      yeast: "",
      malts: "",
      ibu: "",
      alcohol: "",
      blg: "",
    },
  }),
  mutations: {
    SET_RANDOM_BEER: (state, payload) => {
      state.beer = payload;
    },

    SET_ERROR_FOR_BEER: (state, payload) => {
      state.errorTextForBeer = payload;
    },
  },
  actions: {
    getRandomBeer: (context) => {
      context.commit("SET_IS_LOADING", true);
      context.commit("SET_CHOOSEBUTTON_IS_CLICKED", true);
      setTimeout(() => {
        fetch("https://random-data-api.com/api/beer/random_beer")
          .then((response) => response.json())
          .then((data) => {
            try {
              if (data) {
                context.commit("SET_RANDOM_BEER", data);
              }

              if (!data) {
                throw new Error(
                  "Попробуйте повторить запрос: пришли некорректные данные."
                );
              }
            } catch (error) {
              console.log(error);

              context.commit("SET_ERROR_FOR_BEER", error);
            }
          })
          .catch((error) => {
            console.log(error);

            context.commit(
              "SET_ERROR_FOR_BEER",
              "Проверьте свое соединение с сетью"
            );
          })
          .finally(() => {
            context.commit("SET_IS_LOADING", false);
          });
      }, 5000);
    },
  },
  getters: {
    errorTextForBeer(state) {
      return state.errorTextForBeer;
    },
    beer(state) {
      return state.beer;
    },
  },
};
