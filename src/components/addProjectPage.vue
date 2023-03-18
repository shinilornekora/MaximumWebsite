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

.username {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1B1C1F;
}
</style>