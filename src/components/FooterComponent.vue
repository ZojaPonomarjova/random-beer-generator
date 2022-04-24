/*компонент для отображения футера */
<template>
  <footer class="footer">
    <p class="footer-content">
      <span class="footer-name footer-text">Пономарева Зоя</span>
      <span class="footer-copy footer-text">&copy; 2022</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.footer {
  z-index: 10;
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding: 10px;
  margin: 0;

  color: $almostWhite;
  font-family: "Roboto-Medium";

  font-weight: 500;
  font-style: normal;
  font-size: 20px;
}
.footer-text {
  margin: 10px 20px;
}
</style>
