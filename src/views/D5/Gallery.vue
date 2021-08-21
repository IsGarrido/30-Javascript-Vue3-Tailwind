<template>
  <div class="flex h-screen justify-center align-middle">
      <link href='https://fonts.googleapis.com/css?family=Amatic+SC' rel='stylesheet' type='text/css'>

    <div class="flex flex-row flex-grow">
      <div v-for="(item, idx) in items" :key="idx" class="flex flex-grow text-white align-middle justify-center bg-cover cursor-pointer" :style="{'background-image': 'url('+item.bg+')'}">
        <div class="flex text-5xl justify-center align-middle flex-col font-bold" @click="OpenPanel(idx)" :class="GetClass(idx)">
          <p class="flex justify-center" v-show="item.opened">{{item.top}}</p>
          <p class="flex justify-center">{{item.middle}}</p>
          <p class="flex justify-center" v-show="item.opened">{{item.bottom}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      items: [
        {
          bg: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
          top: 'Hey',
          middle: 'Let\'s',
          bottom: 'Dance',
          opened: false,
        },
        {
          bg: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
          top: 'Give',
          middle: 'Take',
          bottom: 'Receive',
          opened: false,
        },
        {
          bg: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
          top: 'Experience',
          middle: 'It',
          bottom: 'Today',
          opened: false,
        },
        {
          bg: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
          top: 'Give',
          middle: 'All',
          bottom: 'You can',
          opened: false,
        },
        {
          bg: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
          top: 'Life',
          middle: 'In',
          bottom: 'Motion',
          opened: false,
        },
      ],

    };
  },
  methods: {
    OpenPanel(idx) {
      this.items[idx].opened = !this.items[idx].opened;
    },
    GetClass(idx) {
      const panel = this.items[idx];
      if (panel.opened) { return 'transition ease-linear duration-1000 transform scale-x-150'; }
      return '';
    },
  },
};
</script>

<style scoped>
p {
      font-family: 'Amatic SC', cursive;

}

.open {
  flex: 5;
  font-size: 40px;
}
</style>
