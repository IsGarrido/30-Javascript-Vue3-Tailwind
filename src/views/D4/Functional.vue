<template>
  <div class="flex h-screen w-full items-center justify-center bg-indigo-100">

    <div class="container">
      <div class="grid grid-cols-3 gap-4">

        <div class="col-span-2">
          <div class="border-black border-4 rounded-lg bg-white">
            <div class="p-2 font-bold bg-gray-200">Mostrando {{ Filtrados.length }} regístros de un total {{ inventors.length }}</div>

            <div class="border-t-4 p-2" v-for="(filtrado, idx) in Filtrados" :key="idx">
              {{ filtrado }}
            </div>
          </div>
        </div>

        <div class="col-span-1 flew flew-col justify-end">
          <div class="text-lg">Controles</div>
          <div><input type="checkbox" v-model="check1">1500s</div>
          <div><input type="checkbox" v-model="check2"> Names </div>
          <div><input type="checkbox" v-model="check3"> Sort Birthdate</div>
          <div><input type="checkbox" v-model="check4"> Ages </div>
          <div><input type="checkbox" v-model="check5"> Sort Lived Years</div>
          <div><input type="checkbox" v-model="check6"> Sort Last Name </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Inventors from '../../assets/D4/inventors';
import People from '../../assets/D4/people';

export default {
  data() {
    return {
      inventors: Inventors,
      people: People,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
    };
  },
  computed: {
    Filtrados() {
      let arr = [...this.inventors];

      if (this.check1) arr = arr.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
      if (this.check3) arr.sort((a, b) => (a.year > b.year ? 1 : -1));
      if (this.check5) arr.sort((a, b) => ((a.passed - a.year) > (b.passed - b.year) ? -1 : 1));
      if (this.check6) arr.sort((a, b) => (a.last > b.last ? 1 : -1));
      if (this.check2) return arr.map((inventor) => `${inventor.first} ${inventor.last}`);
      // eslint-disable-next-line no-return-assign, no-param-reassign
      if (this.check4) return [arr.reduce((acc, curr) => acc += (curr.passed - curr.year), 0)];

      return arr.map((x) => `${x.first} ${x.last} (${x.year} - ${x.passed})`);
    },
  },
};
</script>

<style>

</style>
