<template>
  <div class="header">
    <div class="header__inner">
      <div class="wrapper">
        <strong class="page__name">PROJECT</strong>
        <button class="sort__button">Сортировка ></button>
      </div>
      <button class="sign__in" v-on:click="showPopUp()">Вход в систему</button>
    </div>
  </div>
  <div class="project__placement">
    <div v-for="data in objects" :key="data.index">
      <addProject v-bind:obj=data v-on:touch="testFunction"/>
    </div>
  </div>
  <div v-if="isVisiblePop === true">
    <div class="b-popup">
      <a class="b-popup-content">
        <img src="@/assets/cross.svg" alt="cross.svg" v-on:click="hidePopUp"/>
        <div class="login__text">
          Вход в систему
        </div>
        <div class="credentials">
          <input type="text" placeholder="Логин" v-on:input="loginFieldChange">
          <input type="password" placeholder="Пароль" v-on:input="passwordFieldChange">
        </div>
        <button class="login__button" v-on:click="checkInDatabase">Войти</button>
        <div class="help__text">Для получения логина сделайте запрос куратору</div>
      </a>
    </div>
  </div>
</template>

<script>
import addProject from './project'
import store from '@/store'
export default {
  name: 'projectPage',
  props: {
    msg: String
  },
  components: {
    addProject
  },
  data() {
    return {
      isVisiblePop: false,
      login: '',
      password: '',
      objects: [ {
        name: 'калькулятор',
        authName: 'Nair',
        rating: "4",
        amountOfPupils: "14"
      },
        {
          name: 'Закодил мультиварку',
          authName: 'Segera Lebedev',
          rating: "5",
          amountOfPupils: "65"
        },
        {
          name: 'Комп',
          authName: 'Segera Lebedev',
          rating: "4",
          amountOfPupils: "0"
        }]
    }
  },
  methods: {
    showPopUp() {
      this.isVisiblePop = true
    },
    hidePopUp() {
      this.isVisiblePop = false
    },
    loginFieldChange(event) {
      this.login = event.target.value
    },
    passwordFieldChange(event) {
      this.password = event.target.value
    },
    checkInDatabase() {
      this.authorizeUser()
    },
    authorizeUser() {
      this.$emit("auth", this)
    },
    testFunction() {
      console.log(store.getters.isAuthenticated)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.sign__in {
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

.project__placement {
  margin-top: 90px;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
}
button:hover {
  cursor: pointer;
}

.b-popup{
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(21, 22, 26, 0.2);
  overflow:hidden;
  position:fixed;
  top: 0;
}
.b-popup .b-popup-content{
  margin: 200px auto;
  width:  520px;
  height: 405px;
  display: flex;
  flex-direction: column;
  background-color: #EEEEEE;
  border-radius: 10px;
}

.b-popup-content img {
  width: 30px;
  height: 30px;
  align-self: flex-end;
  padding-right: 1%;
  padding-top: 1%;
}

.b-popup-content img:hover {
  cursor: pointer;
}

.login__text {
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #1B1C1F;
  justify-content: center;
}

.credentials {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 440px;
  border-radius: 10px;
  margin-top: 39px;
  margin-left: 40px;
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

.login__button {
  margin-top: 50px;
  margin-left: 40px;
  width: 440px;
  height: 48px;
  border-radius: 10px;
  background-color: #0057FF;
  color: #EEEEEE;
}

.help__text {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #6B6F7B;
  margin-top: 40px;
}
</style>
