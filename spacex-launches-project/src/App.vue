<template>
<div>
  <nav id="sidebar">
    <div id="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </div>
  </nav>
  <div id="content">
    <router-view/>
  </div>
</div>

</template>

<style>
.wrapper {
    display: flex;
    width: 100%;
}

#sidebar {
    width: 250px;
    font-size:30px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #04081b;
    color: #fff;
    transition: all 0.3s;
}
#app {
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
}
</style>
