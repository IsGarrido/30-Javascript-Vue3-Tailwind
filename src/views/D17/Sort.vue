<template>
  <div class="bg-blue-600 flex align-middle items-center justify-center h-screen w-full">

    <div class="w-auto h-auto bg-white p-10 rounded">
      <input class="mb-3" type="checkbox" v-model="sorted" :checked="sorted" name="sorted" id="sorted">
      <label class="mb-3 ml-2 text-md" for="sorted">Sorted</label>
      <div class="mb-2 text-lg" v-for="(band, idx) in SortedBands" :key="idx">
        {{ band }}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      sorted: false,
      bands: [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'],
    };
  },
  methods: {
    GetCanonicalName(bandname) {
      let band = `_${bandname}`;
      band = band.replace('_A ', '');
      band = band.replace('_An ', '');
      band = band.replace('_The ', '');
      band = band.replace('_', '');
      return band;
    },
  },
  computed: {
    SortedBands() {
      if (this.sorted) {
        const sortedBands = [...this.bands];
        sortedBands.sort((a, b) => (this.GetCanonicalName(a) > this.GetCanonicalName(b) ? 1 : -1));
        return sortedBands;
      }
      return this.bands;
    },
  },
};
</script>

<style>

</style>
