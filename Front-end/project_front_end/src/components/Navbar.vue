<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- 로고 -->
            <a class="navbar-brand d-inline-block" href="#">
                <img src="@/assets/temp_logo_icon.jpg" alt="" width="50" height="50" class="align-text-center"> 사이트명
              </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <!-- 현재 보여주고 있는 페이지일 경우 isActive 메소드 만들고 활성화-->
                  <!-- <a :class="[isActive ? nav-link active, nav-link" href="#">Home</a> -->
                <a class="nav-link active" href="#">Home</a>
              </li>
              <!-- 탭 메뉴 -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  장르
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">영화 추천 받기</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">액션</a></li>
                  <li><a class="dropdown-item" href="#">애니메이션</a></li>
                  <li><a class="dropdown-item" href="#">코미디</a></li>
                </ul>
              </li>
              <!-- 바인드 및 if문으로 로그인 시 Logout 보여주게 만들기 -->
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul>
            <!-- 검색창 -->
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">검색</button>
            </form>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style>
/* 부트스트랩 쓰니까 난잡해보여서 일단 주석처리.. */
    /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- 로고 -->
            <a class="navbar-brand" href="#">
                <img src="로고 url" alt="" width="30" height="24" class="d-inline-block align-text-top">
                사이트명
              </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <!-- 현재 보여주고 있는 페이지일 경우 isActive 메소드 만들고 활성화-->
                  <!-- <a :class="[isActive ? nav-link active, nav-link" href="#">Home</a> -->
                <a class="nav-link active" href="#">Home</a>
              </li>
              <!-- 탭 메뉴 -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  장르
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">영화 추천 받기</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">액션</a></li>
                  <li><a class="dropdown-item" href="#">애니메이션</a></li>
                  <li><a class="dropdown-item" href="#">코미디</a></li>
                </ul>
              </li>
              <!-- 바인드 및 if문으로 로그인 시 Logout 보여주게 만들기 -->
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul>
            <!-- 검색창 -->
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">검색</button>
            </form>
          </div>
        </div>
      </nav> */
</style>


