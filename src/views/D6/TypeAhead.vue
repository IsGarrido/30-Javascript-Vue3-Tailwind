<template>

  <div class="flex w-full h-screen justify-center flex-grow flex-col">
    <div class="w-2/3 justify-center m-auto  border-2 border-black rounded">
      <div class="p-5 text-xl border-b-2 border-black bg-blue-100">
            <label>Buscador:</label>
            <input class=" border-black border-2 rounded p-2 w-full block px-5 py-2 bg-white shadow-lg  text-gray-700 focus:ring focus:outline-none" v-model="SearchString" placeholder="Ciudad">
      </div>
      <div class="max-h-96 overflow-scroll" v-if="Cities">
        <div v-for="(item, idx) in Search" :key="idx" class="border-b p-2" :class="GetClass(idx)">
          <h2 class="text-xl"> {{ item.city }} ({{ item.state }}) <small>{{ item.latitude }} {{ item.longitude }}</small></h2>
          <h3>{{ item.population }}</h3>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  created() {
    fetch(this.url)
      .then((blob) => blob.json())
      .then((arr) => this.Cities.push(...arr));
  },
  data() {
    return {
      SearchString: '',
      Cities: [],

      url: 'https://raw.githubusercontent.com/IsGarrido/30-Javascript-Vue3-Tailwind/main/src/assets/D6/cities.json',
      limit: 10,
    };
  },
  computed: {
    Search() {
      return this.Cities
        .filter((city) => {
          const reg = new RegExp(this.SearchString, 'gi');
          return city.city.match(reg);
        });
    },
  },
  methods: {
    GetClass(idx) {
      if (idx % 2 === 0) return 'bg-blue-100';
      return '';
    },
  },

};
</script>
