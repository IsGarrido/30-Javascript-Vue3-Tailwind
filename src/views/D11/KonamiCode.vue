<template>
  <div class="flex h-screen w-full align-center justify-center items-center bg-yellow-200 flex-col" @keypress="OnKeyPress" tabindex="0">
    <div class="w-64 h-64 bg-white rounded-lg border-1 border-gray-200 shadow-lg flex align-middle justify-center items-center text-3xl" :class="GetClass()">
      {{ LastKeyStroke.toUpperCase() }}
    </div>
    <div class="w-10 h-10 align-bottom justify-center items-end"> {{ CurrentCode }}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      SecretCode: 'wenas',
      CurrentCode: '',
      LastKeyStroke: '',
      IsLastKeyStrokeValid: undefined,
    };
  },
  methods: {
    OnKeyPress(event) {
      this.LastKeyStroke = event.key;

      const idx = this.CurrentCode.length;
      if (this.SecretCode[idx] === this.LastKeyStroke) {
        this.CurrentCode += this.LastKeyStroke;
        this.IsLastKeyStrokeValid = true;
      } else {
        this.IsLastKeyStrokeValid = false;
      }

      if (this.SecretCode === this.CurrentCode) {
        const vthis = this;
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(this.SecretCode);
          vthis.CurrentCode = '';
          vthis.LastKeyStroke = '';
          vthis.IsLastKeyStrokeValid = undefined;
        }, 1000);
      }
    },
    GetClass() {
      const c = [];
      if (this.IsLastKeyStrokeValid === true) c.push('bg-green-200');
      if (this.IsLastKeyStrokeValid === false) c.push('bg-red-200');
      return c;
    },
  },
};
</script>

<style>

</style>
