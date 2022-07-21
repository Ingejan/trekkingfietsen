<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div class="container">
      <BikeCard v-for="bike in bikes" :key="bike.id" :bike="bike" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BikeCard from "@/components/BikeCard.vue";
import BikeService from "@/services/BikeService.js";

export default {
  name: "BikeListView",
  components: {
    BikeCard,
  },
  data() {
    return {
      title: "SlappeBand trekkingfietsen",
      bikes: null,
    };
  },
  created() {
    BikeService.getBikes()
      .then((response) => {
        console.log("events: ", response.data);
        this.bikes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
