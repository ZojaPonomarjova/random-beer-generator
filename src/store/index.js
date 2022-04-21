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
    SET_ERROR_FOR_PERSON: (state, payload) => {
      state.errorTextForPerson = payload;
    },
  },
  actions: {
    GET_RANDOM_PERSON: async (context, person) => {
      let randomPerson;
      fetch("https://random-data-api.com/api/users/random_user ")
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
  },
  modules: {},
});
