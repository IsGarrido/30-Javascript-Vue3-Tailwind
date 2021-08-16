<template>
    <div class="flex h-screen justify-center items-center flex-row space-x-4 bg-cover"  :style="GetBackground()">
        <template v-for="(sound, idx) in sounds" :key="idx">
            <sound-button :file="sound.label" :code="sound.code" :active-code="activeKeyCode"></sound-button>
        </template>
    </div>
</template>
<script>

import SoundButton from './components/SoundButton.vue';

class Sound {
  constructor(code, label) {
    this.code = code;
    this.label = label;
  }
}

export default {
  components: { SoundButton },
  created() {
    const vthis = this;
    window.addEventListener('keydown', function (ev) {
      vthis.activeKeyCode = ev.code.replace('Key', '');

      this.setTimeout(() => { vthis.activeKeyCode = ''; }, 1);
    });
  },
  data() {
    return {
      activeKeyCode: '',
      sounds: [
        new Sound('A', 'Clap'),
        new Sound('S', 'Hi Hat'),
        new Sound('D', 'Kick'),
        new Sound('F', 'Open Hat'),
        new Sound('G', 'Boom'),
        new Sound('H', 'Ride'),
        new Sound('J', 'Snare'),
        new Sound('K', 'Tom'),
        new Sound('L', 'Tink'),
      ],
    };
  },
  methods: {
    GetBackground() {
      return {
        // eslint-disable-next-line import/no-unresolved, global-require
        'background-image': `url(${require('@/assets/D1/foo.jpg').default})`,
      };
    },
  },
};

</script>
