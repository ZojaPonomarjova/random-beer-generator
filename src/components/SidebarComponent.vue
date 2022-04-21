<template>
  <div class="sidebar-container">
    <div class="image-container">
      <img
        src="assets\images\favicon.ico"
        alt="Фото профиля"
        class="profile-image"
      />
    </div>

    <SidebarItem description="Имя" :mainText="name" />
    <SidebarItem description="Фамилия" :mainText="lastName" />
    <SidebarItem description="Возраст" :mainText="age + ' лет'" />
    <SidebarItem description="Должность" :mainText="position" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
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
}
.image-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $orange;
}
.profile-image {
  max-width: 100%;
}
</style>

<script>
import SidebarItem from "./SidebarItem";
import { person } from "../data/person";

const getAge = (str) => {
  const dateOfBirth = new Date(str);
  const today = new Date();
  const age = today - dateOfBirth;

  return Math.trunc(age / 31557600000);
};

export default {
  name: "SidebarComponent",
  props: {
    product: String,

    inStock: Boolean,
  },
  components: {
    SidebarItem,
  },
  data() {
    return {
      name: person.first_name,
      lastName: person.last_name,
      age: getAge(person.date_of_birth),
      position: person.employment.title,
      // position: undefined,
    };
  },
};
</script>
