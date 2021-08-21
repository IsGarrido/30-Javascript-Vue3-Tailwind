<template>
  <div class="flex items-center justify-center h-screen bg-pink-200">
    <div class="container">

      <div class="m-5 flex justify-center">
        <div class="bg-white space-x-10 p-3 rounded-lg">
          <div class="space-x-2 inline align-middle">
            <label>Spacing</label>
            <input type="range" min="0" max="50" v-model="spacing"> {{ spacing }}px
          </div>
          <div class="space-x-2 inline align-middle">
            <label>Blur</label>
            <input type="range" min="0" max="50" v-model="blur"> {{ blur }}px
          </div>
          <div class="space-x-2 inline align-middle">
            <label>Blur</label>
            <input type="color" v-model="borderColor"> {{ blur }}px
          </div>
        </div>
      </div>

      <div class="flex justify-center align-middle rounded-lg" :style="GetStyle()">
        <img :src="picture" alt="Venom">
      </div>

    </div>

  </div>
</template>

<script>
import Venom from '../../assets/D3/venom.jpg';

export default {
  data() {
    return {
      picture: null,
      spacing: 0,
      blur: 0,
      borderColor: '#ffffff',
    };
  },
  created() {
    this.picture = Venom;
  },
  methods: {
    GetStyle() {
      return {
        'background-color': `${this.borderColor}`,
        padding: `${this.spacing}px`,
        filter: `blur(${this.blur}px)`,
      };
    },
  },
};
</script>

<style>

</style>
