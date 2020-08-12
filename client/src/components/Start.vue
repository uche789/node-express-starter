<template>
  <div class="hello">
    <h1>{{ appName }}</h1>
    <p>
      {{ appDescription }}
    </p>
    <h3>Packages</h3>
    <ul>
      <li v-for="(aPackage, index) in appInfo.packages" :key="index">{{ aPackage }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Starter',
  props: {
    msg: String
  },
  computed: {
    appData() {
      return this.$store.state.application.data;
    },
    appDataExists() {
      return Array.isArray(this.appData) && this.appData.length > 0
    },
    appInfo() {
      if (!this.appDataExists) return {};

      return this.appData[0].info.application;
    },
    appName() {
      return this.appInfo.name;
    },
    appDescription() {
      return this.appInfo.description;
    },
  },
  watch: {
    appData() {
      //console.log(this.appData);
    }
  },
  mounted() {
    this.$store.dispatch('application/fetch');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
