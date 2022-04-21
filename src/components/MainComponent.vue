<template>
  <div>
    <SidebarComponent />
    <main class="main">
      <!-- <p v-if="isAuth">In Stock</p>
      <p v-else>Out of Stock</p> -->
      <ChooseBeer />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";
// $orange: #ef6817;
// $almostBlack: #21201f;
// $lightGrey: #727271;
// $grey: #5f605d;
// $darkGrey: #383838;
div {
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;

  // display: flex;
  // flex-direction: column;
  // align-items: center;
  margin-left: 300px;
  background-color: $darkGrey;
  padding-right: 50px;
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
