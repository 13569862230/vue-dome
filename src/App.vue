<template>
  <div id="app">
		<navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
	import navbar from './components/navbar'
	
export default {
		components:{
			"navbar":navbar
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

