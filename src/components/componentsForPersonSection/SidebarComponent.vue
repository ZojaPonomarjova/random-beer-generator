/*Компонент для отображения данных пользователя */
<template>
  <aside
    class="sidebar-container"
    :class="[minimizeSidebar ? 'sidebar-container-minimized' : '']"
  >
    <div
      class="menu-toggle"
      :class="[minimizeSidebar ? '' : 'menu-toggle-moved']"
      v-on:click="handleClickToggleSidebar"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="image-container">
      <img :src="profileUrl" alt="Фото профиля" class="profile-image" />
    </div>
    <SidebarItem description="Имя" :mainText="randomPerson.first_name" />
    <SidebarItem description="Фамилия" :mainText="randomPerson.last_name" />
    <SidebarItem description="Возраст" :mainText="personAge" />
    <SidebarItem
      description="Должность"
      :mainText="randomPerson.employment.title"
    />
    <div class="sidebar-error" v-if="errorText">{{ errorText }}</div>
  </aside>
</template>

<script>
import SidebarItem from "./SidebarItem";
import { mapActions } from "vuex";

export default {
  name: "SidebarComponent",

  components: {
    SidebarItem,
  },
  mounted() {
    this.$store.dispatch("getRandomPerson");
  },

  computed: {
    //ошибка при загрузке
    errorText() {
      return this.$store.getters.errorTextForPerson;
    },
    //данные пользователя
    randomPerson() {
      return this.$store.getters.person;
    },
    //вычисленный возраст
    personAge() {
      return this.$store.getters.personAge;
    },
    //src для фото профиля
    profileUrl() {
      return this.$store.getters.avatar;
    },
    //состояние для разворачивания сайдбара на маленьких экранах
    minimizeSidebar() {
      return this.$store.getters.minimizeSidebar;
    },
  },
  methods: {
    ...mapActions({
      handleClickToggleSidebar: "minimizeSidebar",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars.scss";
.sidebar-container {
  position: fixed;
  top: 0px;
  left: 0px;
  height: calc(100% - 63px);
  width: 300px;

  display: flex;
  flex-direction: column;
  background-color: $almostBlack;
  padding-left: 2%;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    position: absolute;

    padding: 15px 20px;

    transition: all 0.5s;

    z-index: 2;
  }
}
.image-container {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: $orange;
}
.profile-image {
  max-width: 100%;
  border-radius: 50%;
}

.sidebar-error {
  margin-top: 50px;

  font-family: "OpenSans-Regular";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;

  color: $orange;
}

.menu-toggle {
  display: none;
  @media screen and (max-width: 768px) {
    height: fit-content;

    display: block;
    position: relative;
    top: 10px;
    left: 320px;

    width: 40px;

    z-index: 3;

    -webkit-user-select: none;
    user-select: none;
  }
}
@media screen and (max-width: 768px) {
  .sidebar-container-minimized {
    transform-origin: 0% 0%;
    transform: translate(-300px, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .menu-toggle-moved {
    left: 230px;
    transition: all 0.5s;
  }

  .menu-toggle-input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 10;

    -webkit-touch-callout: none;
  }

  .menu-toggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  .menu-toggle span:first-child {
    transform-origin: 0% 0%;
  }

  .menu-toggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .menu-toggle-moved span {
    opacity: 1;
    transform: rotate(45deg) translate(-15px, -10px);
  }

  .menu-toggle-moved span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .menu-toggle-moved span:nth-last-child(2) {
    transform: rotate(-45deg) translate(-8px, 6px);
  }
}
</style>
