<template>
  <div class="flex h-screen w-full">
    <!-- {{ $data }} -->
    <canvas
      class="w-full h-full border-4"
      ref="canvas"
      @mousedown="OnClick"
      @mouseup="AfterClick"
      @mouseout="AfterClick"
      @mousemove="Draw"
      ></canvas>
  </div>
</template>

<script>
/* eslint-disable no-plusplus */

export default {
  mounted() {
    this.context = this.$refs.canvas.getContext('2d');
    const c = this.context;

    this.$refs.canvas.width = window.innerWidth;
    this.$refs.canvas.height = window.innerHeight;

    c.strokeStyle = '#BADA55';
    c.lineJoin = 'round';
    c.lineCap = 'round';
    c.lineWidth = 100;
  },
  data() {
    return {
      context: undefined,
      clicking: false,
      prevX: 0,
      prevY: 0,
      hue: 0,
      grow: true,
    };
  },
  methods: {
    AfterClick(_e) {
      this.clicking = false;
    },
    OnClick(e) {
      this.clicking = true;
      this.GrabPosition(e);
    },
    Draw(e) {
      if (!this.clicking) return;
      const c = this.context;

      c.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      c.beginPath();
      c.moveTo(this.prevX, this.prevY);
      c.lineTo(e.offsetX, e.offsetY);
      c.stroke();

      this.GrabPosition(e);

      if (this.hue++ >= 360) this.hue = 0;

      if (c.lineWidth >= 200 || c.lineWidth <= 50) this.grow = !this.grow;

      if (this.grow) c.lineWidth++;
      else c.lineWidth--;
    },
    GrabPosition(e) {
      this.prevX = e.offsetX;
      this.prevY = e.offsetY;
    },

  },
};
</script>
