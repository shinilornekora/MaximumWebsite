<template>
  <div class="header">
    <div class="header__inner">
      <div class="wrapper">
        <strong class="page__name">PROJECT</strong>
        <button class="sort__button">Сортировка ></button>
      </div>
      <div class="wrapper__second">
        <div class="username">{{username}}</div>
        <button class="add__project" v-on:click="addProject">Добавить проект</button>
        <img src="@/assets/exit.png" alt="exit" v-on:click="logouting">
      </div>
    </div>
  </div>
  <div class="project__placement">
    <div v-for="data in objects" :key="data.index">
      <addProject v-bind:obj=data v-on:touch="seeProject"/>
    </div>
  </div>
</template>

<script>
import addProject from './project'
import store from "@/store";
import router from "@/router";
export default {
  name: 'projectPageAuth',
  props: {
    username: String
  },
  components: {
    addProject
  },
  data() {
    return {
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
    addProject() {
      this.$emit("add", "Пользователь захотел добавить свой проект")
    },
    seeProject(data) {
      this.testFunction()
      this.$emit("touch", data)
    },
    logouting() {
      store.dispatch('logout')
      router.push('login')
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

.wrapper__second img {
  width: 20px;
  height: 20px;
}

.wrapper__second img:hover {
  cursor: pointer;
}

.username {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1B1C1F;
}
</style>
