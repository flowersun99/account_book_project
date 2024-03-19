<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="std container-fluid">
      <a class="navbar-brand" href="#">🔫차가운 가계부</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav fl">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">게시판</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">뉴스/이벤트</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login">로그인/회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <video autoplay muted style="width : 100%; margin : 0px">
    <source src="./assets/test.mp4">
  </video>
</template>

<script>

  export default {
    name: 'App',
    components: {
      
    }
  }
</script>

<style>
  div body {
    margin : 0px;
  }

  .std {
    font-size : 23px;
  }


  nav {
    margin : 15px;
    padding : 10px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
