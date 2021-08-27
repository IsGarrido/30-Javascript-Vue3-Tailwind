<template>
  <div class="flex h-screen w-full justify-center items-center bg-cover flex-col" :style="GetBackground()">
    <div class="w-auto h-auto bg-white bg-opacity-80 p-8">
      <h2 class="flex text-4xl justify-center mt-3 font-bold">Local Tapas</h2>
      <div v-for="(item, idx) in items" :key="idx" @click="Toggle(item)" class=" border-b-2 border-gray-300 select-none ">
        <div class="m-5 font-bold ">
          <span v-if="item.checked">🌮</span>
          <span v-else>⬜</span>
          <span class="ml-2">{{ item.label }}</span>
        </div>
      </div>
      <div class="flex flex-row">
        <input type="text" v-model="nuevo" @keypress.enter="Add"
          class="border-black border-2 rounded p-2 w-full block px-5 py-2 bg-white shadow-lg  text-gray-700 focus:ring focus:outline-none">
          <button @click="Add" class="bg-gray-400 font-bold ml-2 mr-2 p-2 border border-gray-500 inline w-36">➕ Añadir</button>
      </div>
    </div>
    <div class="w-60 h-auto bg-white bg-opacity-80 p-2 rounded-md mt-5">
    <span @click="Clear()">Clear localStorage & reload</span>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    this.Load();
  },
  data() {
    return {
      items: [
        { label: 'Gambas', checked: false },
        { label: 'Squid', checked: true },
        { label: 'Tacos', checked: false },
        { label: 'Pork Taco', checked: true },
        { label: 'Fish', checked: false },
      ],
      nuevo: '',
      KEY: 'D15/LocalStorage.vue',
    };
  },
  methods: {
    GetBackground() {
      return {
      // eslint-disable-next-line import/no-unresolved, global-require
        'background-image': `url(${require('@/assets/D15/bg.jpeg').default})`,
      };
    },
    Add() {
      this.items.push({ label: this.nuevo, checked: false });
      this.nuevo = '';
      this.Save();
    },
    Toggle(item) {
      item.checked = !item.checked;
      this.Save();
    },
    Load() {
      const sData = window.localStorage.getItem(this.KEY);
      if (sData) { this.items = JSON.parse(sData); }
    },
    Save() {
      window.localStorage.setItem(this.KEY, JSON.stringify(this.items));
    },
    Clear() {
      window.localStorage.removeItem(this.KEY);
      window.location.reload();
    },
  },
};
</script>

<style>

</style>
