<template>
  <div class="container">
    <div class="text-container">
      <h1>{{ title }}</h1>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      title: "De trekkingfietsen van de SlappeBand",
      text: "Wilma bouwt graag trekkingfietsen, en dat hebben we geweten bij de slappeband. Ben je op zoek naar een fijne trekkingfiets, kom dan eens een kijkje nemen.",
    };
  },
};
</script>

<style scoped>
.text-container {
  width: 400px;
}
</style>
