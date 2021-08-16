<template>
    <div class="flex flex-col justify-center items-center border-2 text-white box-content h-24 w-24 bg-black opacity-80 rounded" :class="currentClass">
        <div class="text-4xl">{{ code }}</div>
        <div class="align-bottom text-yellow-400">{{file}}</div>
    </div>

</template>

<script>

export default {
  props: {
    file: {
      type: String,
      required: true,
      default: '',
    },
    code: {
      type: String,
      required: true,
      default: '',
    },
    activeCode: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      audio: null,
      currentClass: '',
    };
  },
  created() {
    import(`@/assets/D1/${this.file.toLowerCase().replaceAll(' ', '')}.wav`).then((audio) => {
      this.audio = new Audio(audio.default);
    });
  },
  watch: {
    activeCode: {
      intermediate: true,
      handler(val, _oldVal) {
        if (val === this.code) {
          this.currentClass = 'border-yellow-300 transition duration-300 ease-in transform scale-105';
          this.audio.currentTime = 0;
          this.audio.play();
        } else if (val !== '') {
          this.currentClass = '';
        }
      },
    },
  },
};

</script>

<style>

</style>
