<template>
  <div class="container" v-if="bike">
    <h1>{{ bike.brand }} {{ bike.type }}</h1>
    <span class="bike-details__size"
      >Maat: {{ bike.frameSize }} | {{ bike.tireSize }} inch</span
    >
    <span class="bike-details__carriers" @v-if="bike.carriers"
      >Met dragers</span
    >
    <img
      class="bike-details__image"
      :src="bike.imageSrc"
      :alt="bike.brand + ' ' + bike.type"
    />
  </div>
</template>

<script>
import BikeService from "@/services/BikeService.js";

export default {
  props: ["id"],
  data() {
    return {
      bike: null,
    };
  },
  created() {
    BikeService.getBike(this.id)
      .then((response) => {
        this.bike = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.bike-details__image {
  width: 100%;
}

.bike-details__size {
  display: block;
  margin-bottom: 6px;
}

.bike-details__carriers {
  display: block;
  margin-bottom: 12px;
}
</style>
