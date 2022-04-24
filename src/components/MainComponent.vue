/*корневой компонент */
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
import ChooseBeer from "@/components/componentsForBeerSection/ChooseBeer.vue";
import SidebarComponent from "@/components/componentsForPersonSection/SidebarComponent.vue";

export default {
  name: "MainComponent",
  components: {
    ChooseBeer,
    FooterComponent,
    SidebarComponent,
  },
};
</script>
