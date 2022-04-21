<template>
  <p class="sidebar-text">
    <span class="thin-text">{{ description }}</span
    ><span v-if="mainText" class="bold-text">{{ mainText }}</span>
    <LoaderLetters v-else />
  </p>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
.sidebar-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 30px 60px 0px 10px;
  margin: 0;
}

.thin-text {
  font-family: "OpenSans-Regular";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;

  color: $lightGrey;

  margin-bottom: 5px;
}

.bold-text {
  font-family: "OpenSans-Bold";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;

  color: $almostWhite;
}
</style>

<script>
import LoaderLetters from "./LoaderLetters.vue";
export default {
  name: "SidebarItem",
  props: {
    description: String,
    mainText: String,
  },
  components: {
    LoaderLetters,
  },
};
</script>
