<template>
  <MainComponent />
</template>

<style lang="scss">
@import "./assets/styles/vars.scss";
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  background-color: $almostBlack;
}

div {
  height: 100%;
  // width: 100%;
}

* {
  box-sizing: border-box;
}
</style>

<script>
import MainComponent from "@/components/MainComponent";

export default {
  name: "MainView",
  components: {
    MainComponent,
  },
};
</script>
