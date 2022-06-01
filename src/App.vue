<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/user/signup">회원가입</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Pretendard-Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("@/common/font/Pretendard-Regular.ttf");
}

@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("@/common/font/Pretendard-SemiBold.ttf");
}
</style>
