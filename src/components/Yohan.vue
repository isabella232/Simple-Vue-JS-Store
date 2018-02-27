<template>
  <div>
    Hello {{name}}
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Yohan',
  data () {
    return {
      name: 'Yohan Ya?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
