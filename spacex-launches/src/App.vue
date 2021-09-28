<template>
<div>
  <nav id="sidebar">
    <div id="nav">
      <ol style="padding-left:0px">
        <router-link to="/">Home</router-link>
      </ol>
      <ol style="padding-left:0px">
        <router-link to="/about">About</router-link>
      </ol>
    </div>
  </nav>
  <div id="content">
    <router-view></router-view>
  </div>
</div>
</template>

<style>
#sidebar {
    width: 10%;
    font-size:30px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #040918;
    color: #fff;
    transition: all 0.3s;
    text-align: center;
}
#content {
    margin-left:10%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4244b9;
}

.container{
  text-align:center
}
</style>
