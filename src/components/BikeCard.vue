<template>
  <router-link
    class="bike-card__link"
    :to="{ name: 'bike-detail', params: { id: bike.id } }"
  >
    <div class="bike-card">
      <h4>{{ bike.brand }} {{ bike.type }}</h4>
      <span class="bike-card__size"
        >Maat: {{ bike.frameSize }} | {{ bike.tireSize }} inch</span
      >
      <span class="bike-card__carriers" @v-if="bike.carriers">Met dragers</span>
      <img
        :src="bike.imageSrc"
        :alt="bike.brand + ' ' + bike.type"
        class="bike-card__image"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BikeCard",
  props: {
    bike: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bike-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.bike-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.bike-card__link {
  text-decoration: none;
  color: #39495c;
}

.bike-card__size {
  display: block;
  margin-bottom: 6px;
}

.bike-card__carriers {
  display: block;
  margin-bottom: 12px;
}

.bike-card__image {
  width: 100%;
}
</style>
