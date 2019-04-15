<template>
  <div class="navbar">
    <router-link to="/">首页</router-link>
    <router-link to="/find">发现</router-link>
    <router-link to="/my">我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.navbar{
	display: flex;
	line-height: 40px;
	width: 100%;
	background: #333;
	position: fixed;
	bottom: 0;
	left: 0;
}
.navbar a{
	flex: 1;
	color: #fff;
	text-decoration: none;
}
</style>
