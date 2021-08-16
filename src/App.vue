<template>
<div>
<router-view/>
  <div id="nav" v-for="(item, idx) in items" :key="idx">
    <router-link :to="item.path">{{ item.name}}</router-link> |
  </div>
</div>

</template>

<script>
export default {
  created() {
    this.$router.options.routes.forEach((route) => {
      this.items.push({
        name: route.name,
        path: route.path,
      });
    });
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
