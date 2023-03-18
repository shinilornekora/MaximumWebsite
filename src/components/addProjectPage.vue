<template>
  <div class="header">
    <div class="header__inner">
      <div class="wrapper">
        <strong class="page__name">PROJECT</strong>
        <button class="sort__button">Сортировка ></button>
      </div>
      <div class="wrapper__second">
        <div class="username">{{username}}</div>
        <button class="add__project">Добавить проект</button>
      </div>
    </div>
  </div>
  <div class="project__add">
    <div class="gif__place">
      <div class="GIF__placement">
        <div class="helpful__text">GIF</div>
      </div>
      <div class="link__helpful">
        Как сделать GIF:
        <a href="/">ссылка</a>
      </div>
    </div>
    <div class="project__info">
      <div class="project__information">
        <input type="text" placeholder="Название проекта"/>
        <textarea placeholder="Описание"/>
      </div>
      <div class="zip__archive">
        <div class="zipper">ZIP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProjectPage",
  props: {
    username: String
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: None;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  height: 90px;
  z-index: 100;
  -webkit-box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
}
.header__inner {
  width: 60%;
  max-width: 1200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 0 0;
  box-shadow: 0 0;
}

.add__project {
  background: #0057FF;
  color: #EEEEEE;
  border-radius: 40px;
  border: None;
  padding: 15px 23px;
}

.page__name {
  font-size: 30px;
  color: #1B1C1F;
}

.sort__button {
  padding: 15px 29px;
  margin-left: 50px;
  line-height: 20px;
  color: #6B6F7B;
  background: #D1D9F5;
  border: 2px solid #7DA5F9;
  border-radius: 40px;
}

button:hover {
  cursor: pointer;
}

.credentials input {
  width: 440px;
  height: 52px;
  padding-left: 20px;
  background: #D7D9DE;
  border-radius: 10px;
  border-collapse: collapse;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #6B6F7B;
}

.wrapper__second {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.project__add {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 140px;
  height: 900px;
  justify-content: center;
  gap: 40px;
}

.gif__place {
  width: 560px;
  height: 420px;
  background: #D7D9DE;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
}

.username {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1B1C1F;
}

.project__info {
  display: flex;
  flex-direction: column;
  padding: 0.5% 0;
  height: 420px;
  gap: 40px;
}

.project__information {
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #6B6F7B;
  font-weight: 100;
  font-size: 16px;
  line-height: 20px;
}

.project__information input, .project__information textarea{
  padding: 10px 10px;
  width: 560px;
  font-size: 16px;
}

.zip__archive {
  width: 120px;
  height: 120px;
  display: flex;
  background: #D1D9F5;
  border: 2px dashed #0057FF;
  border-radius: 10px;
  justify-content: center;
}

.zipper {
  align-self: center;
}


.GIF__placement {
  width: 120px;
  height: 120px;
  display: flex;
  background: #D1D9F5;
  border: 2px dashed #0057FF;
  border-radius: 10px;
  justify-content: center;
  align-self: center;
}

.GIF__placement:hover, .zip__archive:hover {
  cursor: pointer;
}

.helpful__text {
  align-self: center;
}

.link__helpful a {
  color: #0057FF;
  text-decoration: none;
  font-weight: 400;
}
</style>