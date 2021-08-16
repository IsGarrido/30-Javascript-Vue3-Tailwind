<template>
    <div class="flex bg-gray-700 h-screen justify-center items-center">
        <div class="clock-face flex bg-white rounded-full h-48 w-48" >
            <div class="hand bottom-2/4"        :style="GetSecondsStyle()"></div>
            <div class="hand bottom-2/4"        :style="GetMinutesStyle()"></div>
            <div class="hand horas bottom-2/4"  :style="GetHoursStyle()"></div>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  },
  created() {
    const vthis = this;
    this.UpdateTime();
    setInterval(() => { vthis.UpdateTime(); }, 1000);
  },
  methods: {
    UpdateTime() {
      const date = new Date();
      this.seconds = date.getSeconds();
      this.minutes = date.getMinutes();
      this.hours = date.getHours();
    },
    GetSecondsStyle() {
      const deg = ((this.seconds / 60) * 360) + 90;
      return { transform: `rotate(${deg}deg)` };
    },
    GetMinutesStyle() {
      const deg = ((this.minutes / 60) * 360) + 90;
      return { transform: `rotate(${deg}deg)` };
    },
    GetHoursStyle() {
      const deg = ((this.hours / 12) * 360) + 90;
      return { transform: `rotate(${deg}deg)` };
    },

  },
};
</script>

<style>
  .clock-face {
    position: relative;
  }

  .hand {
    width:50%;
    height:6px;
    background:black;
    position: absolute;
    top:50%;
    transform-origin: 100%;
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  }

</style>
