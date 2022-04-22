import { createStore } from "vuex";
const getAge = (str) => {
  if (str) {
    const dateOfBirth = new Date(str);
    const today = new Date();
    const age = Math.trunc((today - dateOfBirth) / 31557600000);
    const lastDigit = age % 10;

    if (lastDigit === 1) {
      return `${age} год`;
    } else if (lastDigit > 1 && lastDigit <= 4) {
      return `${age} года`;
    } else {
      return `${age} лет`;
    }
  }
  return null;
};
//lastDigit = sampleNumber % 10
export default createStore({
  state: {
    person: {
      first_name: "",
      last_name: "",
      username: "",
      date_of_birth: "",
      employment: {
        title: "",
        key_skill: "",
      },
      avatar: "assets/images/cabinet.png",
    },
    errorTextForPerson: "",
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
    isLoading: false,
    chooseButtonIsClicked: false,
  },
  getters: {
    PERSON_AGE: (state) => {
      return getAge(state.person.date_of_birth);
    },
  },
  mutations: {
    SET_RANDOM_PERSON: (state, payload) => {
      state.person = payload;
    },
    SET_RANDOM_BEER: (state, payload) => {
      state.beer = payload;
    },
    SET_ERROR_FOR_PERSON: (state, payload) => {
      state.errorTextForPerson = payload;
    },
    SET_ERROR_FOR_BEER: (state, payload) => {
      state.errorTextForBeer = payload;
    },
    SET_IS_LOADING: (state, payload) => {
      state.isLoading = payload;
    },
    SET_CHOOSEBUTTON_IS_CLICKED: (state, payload) => {
      state.chooseButtonIsClicked = payload;
    },
  },
  actions: {
    GET_RANDOM_PERSON: (context, person) => {
      // let randomPerson;

      fetch("https://random-data-api.com/api/users/random_user")
        .then((response) => response.json())
        .then((data) => {
          try {
            console.log(data);

            if (data) {
              context.commit("SET_RANDOM_PERSON", data);
            }

            if (!data) {
              throw new Error(
                "Попробуйте повторить запрос: пришли некорректные данные."
              );
            }
          } catch (error) {
            console.log(error);

            context.commit("SET_ERROR_FOR_PERSON", error);
          }
        })
        .catch((error) => {
          console.log(error);

          context.commit(
            "SET_ERROR_FOR_PERSON",
            "Проверьте свое соединение с сетью"
          );
        });
    },
    GET_RANDOM_BEER: (context, beer) => {
      console.log("store");
      // let randomBeer;
      context.commit("SET_IS_LOADING", true);
      context.commit("SET_CHOOSEBUTTON_IS_CLICKED", true);
      fetch("https://random-data-api.com/api/beer/random_beer")
        .then((response) => response.json())
        .then((data) => {
          try {
            console.log(data);

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
    },
  },
  modules: {},
});
