<template>
  <div class="sidebar-container">
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
</style>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "SidebarComponent",
  props: {
    product: String,

    inStock: Boolean,
  },
  components: {
    SidebarItem,
  },
  mounted() {
    this.$store.dispatch("GET_RANDOM_PERSON");
  },

  computed: {
    errorText() {
      return this.$store.state.errorTextForPerson;
    },
    randomPerson() {
      return this.$store.state.person;
    },
    personAge() {
      return this.$store.getters.PERSON_AGE;
    },
    profileUrl() {
      return this.$store.state.person.avatar;
    },
  },
};
</script>
