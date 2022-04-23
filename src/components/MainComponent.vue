<template>
  <div>
    <SidebarComponent />
    <main class="main">
      <ChooseBeer />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

div {
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
  margin-left: 300px;
  background-color: $darkGrey;
  // height: 100%;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.footer {
  flex: 0 0 auto;

  background-color: $grey;
}
</style>

<script>
import FooterComponent from "@/components/FooterComponent";
import ChooseBeer from "@/components/ChooseBeer";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "MainView",
  components: {
    ChooseBeer,
    FooterComponent,
    SidebarComponent,
  },
};
</script>
