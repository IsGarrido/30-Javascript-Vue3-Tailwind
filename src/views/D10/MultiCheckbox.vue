<template>

  <div class="flex h-screen w-screen align-middle justify-center bg-yellow-300">
    <div class="container px-96 pt-32 pb-32">
      <div class="bg-white  shadow-2xl border-gray-600 border-1 rounded-xl h-auto">

          <div v-for="(task, idx) in tasks" :key="idx" class="flex flex-wrap overflow-hidden border-b-2 text-lg" :class="GetClass(idx)" @click.shift.left.exact="Selected(idx)">
            <div class="w-16 h-16 border-r-2  border-blue-200"><div class="flex align-middle justify-center items-center h-16">
              <input type="checkbox" :checked="task.Checked" @click="tasks[idx].Checked = !tasks[idx].Checked"></div>
            </div>
            <div class="w-auto h-16"><div class="flex align-middle justify-center items-center h-16 pl-2">
              {{ task.Label }} <span v-if="selectedFrom === idx">▶</span>
            </div></div>
          </div>

      </div>

    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      tasks: [
        { Label: 'Check 0', Checked: false },
        { Label: 'Check 1', Checked: false },
        { Label: 'Check 2', Checked: false },
        { Label: 'Check 3', Checked: false },
        { Label: 'Check 4', Checked: false },
        { Label: 'Check 5', Checked: false },
        { Label: 'Check 6', Checked: false },
      ],
      selectedFrom: -1,
    };
  },
  methods: {
    GetClass(idx) {
      const classes = [];
      if (idx === this.tasks.length - 1) classes.push(...['rounded-bl-lg', 'rounded-br-lg']);

      const item = this.tasks[idx];
      if (item.Checked) classes.push(...['bg-gray-100', 'line-through']);
      return classes;
    },
    Selected(idx) {
      // Si ya están seleccionados
      if (this.selectedFrom === idx) this.selectedFrom = -1;

      else if (this.selectedFrom === -1) this.selectedFrom = idx;
      else {
        if (idx < this.selectedFrom) {
          const sw = this.selectedFrom;
          this.selectedFrom = idx;
          // eslint-disable-next-line no-param-reassign
          idx = sw;
        }
        for (let i = this.selectedFrom; i < idx + 1; i += 1) this.tasks[i].Checked = true;
        this.selectedFrom = -1;
      }
    },
  },
};
</script>
