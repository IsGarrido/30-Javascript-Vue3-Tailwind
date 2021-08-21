<template>

  <div class="flex h-screen w-screen bg-gray-100">
    <div class="m-4 w-full">

      <div class="mx-auto w-2/4 bg-white rounded border-2 p-2">

        <div class="flex flex-row justify-evenly">
          <div class="flex flex-col justify-items-start">
            <div class="mt-4 p-4 pl-0">
              <h1 class="text-xl font-semibold text-gray-700">Configurar</h1>
            </div>

            <label class="flex flex-row items-center mt-3 text-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded" v-model="CheckSome">
                <span class="ml-2 text-gray-700">Some >= 19 Years</span> <span v-if="CheckSome && CheckSomeResult">✅</span>
            </label>

            <label class="flex flex-row items-center mt-3 text-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded" v-model="CheckAll">
                <span class="ml-2 text-gray-700">All >= 19 Years</span> <span v-if="CheckAll && !CheckAllResult">🟥</span><span v-else></span>
            </label>

            <label class="flex flex-row items-center mt-3 text-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded" v-model="CheckOnlyId">
                <span class="ml-2 text-gray-700">Only comment ID of 823423</span>
            </label>

            <label class="flex flex-row items-center mt-3 text-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded" v-model="CheckAllById">
                <span class="ml-2 text-gray-700">All but comment ID of 823423</span>
            </label>
          </div>

          <div class="flex flex-col justify-around">
            <h1 class="text-lg font-semibold text-gray-700">People</h1>

            <div v-for="(item, idx) in GetResult()" :key="idx">
              <p>{{ item.name }} - <small class="text-sm text-gray-700"> {{ item.year }} </small></p>
            </div>
          </div>

          <div class="flex flex-col justify-around">
            <h1 class="text-lg font-semibold text-gray-700">Comments</h1>

            <div v-for="(item, idx) in GetResultComments()" :key="idx">
              <p>{{ item.text }} - <small class="text-sm text-gray-700"> {{ item.id }} </small></p>
            </div>
          </div>

        </div>
        </div>

    </div>

  </div>

</template>
<script>

import Comments from '../../assets/D7/comments';
import People from '../../assets/D7/people';

export default {
  data() {
    return {
      comments: Comments,
      people: People,

      CheckSome: false,
      CheckSomeResult: false,

      CheckAll: false,
      CheckAllResult: false,

      CheckOnlyId: false,
      CheckAllById: false,
    };
  },
  methods: {
    GetResult() {
      let data = [...this.people];

      if (this.CheckSome) {
        data = data.filter((person) => new Date().getFullYear() - person.year >= 19);
        this.CheckSomeResult = this.people.some((person) => new Date().getFullYear() - person.year >= 19);
      }

      if (this.CheckAll) {
        data = data.filter((person) => new Date().getFullYear() - person.year >= 19);
        this.CheckAllResult = this.people.every((person) => new Date().getFullYear() - person.year >= 19);

        if (data.length < this.people.length) { data = []; }
      }

      console.log(data);
      return data;
    },
    GetResultComments() {
      const data = [...this.comments];

      if (this.CheckOnlyId) return data.filter((comment) => comment.id === 823423);
      if (this.CheckAllById) return data.filter((comment) => comment.id !== 823423);

      return data;
    },
  },
};
</script>
