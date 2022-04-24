//функция для вычисления возраста
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

export const moduleForPerson = {
  state: () => ({
    person: {
      first_name: "",
      last_name: "",
      username: "",
      date_of_birth: "",
      employment: {
        title: "",
        key_skill: "",
      },
    },
    errorTextForPerson: "",

    avatar: "assets/images/cabinet.png",
  }),
  mutations: {
    SET_RANDOM_PERSON: (state, payload) => {
      state.person = payload;
    },

    SET_ERROR_FOR_PERSON: (state, payload) => {
      state.errorTextForPerson = payload;
    },

    SET_AVATAR: (state, payload) => {
      state.avatar = payload;
    },
  },
  actions: {
    getRandomPerson: (context) => {
      fetch("https://random-data-api.com/api/users/random_user")
        .then((response) => response.json())
        .then((data) => {
          try {
            if (data) {
              context.commit("SET_RANDOM_PERSON", data);
              if (data.avatar) {
                context.commit("SET_AVATAR", data.avatar);
                const img = document.querySelector(".profile-image");

                img.addEventListener("error", () => {
                  context.commit("SET_AVATAR", "assets/images/cabinet.png");
                });
              }
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
  getters: {
    personAge: (state) => {
      return getAge(state.person.date_of_birth);
    },
    person(state) {
      return state.person;
    },
    errorTextForPerson(state) {
      return state.errorTextForPerson;
    },
    avatar(state) {
      return state.avatar;
    },
  },
};
