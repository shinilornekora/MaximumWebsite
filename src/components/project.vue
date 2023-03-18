<template>
<div class="project">
  <div class="project__logo">
    {{GIF}}
  </div>
  <div class="project__info">
    <div class="project__name">
      {{obj.name}}
    </div>
    <div class="project__info1">
      <div class="author__name">
        {{obj.authorName}}
      </div>
      <div class="estimation__rate">
        <div v-if="obj.rating === '1'">
          <img src="@/assets/oneStar.png" alt="★☆☆☆☆"/>
        </div>
        <div v-else-if="obj.rating === '2'">
          return <img src="@/assets/twoStars.png" alt="★★☆☆☆"/>
        </div>
        <div v-else-if="obj.rating === '3'">
          <img src="@/assets/threeStars.png" alt="★★★☆☆"/>
        </div>
        <div v-else-if="obj.rating === '4'">
          <img src="@/assets/fourStars.png" alt="★★★★☆"/>
        </div>
        <div v-else-if="obj.rating === '5'">
          <img src="@/assets/fiveStars.png" alt="★★★★★"/>
        </div>
      </div>
    </div>
    <div v-if="obj.amountOfPupils !== '0'">
      <div class="review">
        {{obj.amountOfPupils}} учеников из вашего потока оценили этот проект
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "addProject",
  props: {
    GIF: File,
    obj: {
      name: String,
      authorName: String,
      rating: String,
      amountOfPupils: String
    }
  },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.project {
  width: 360px;
  height: 368px;
  -webkit-box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
}
.project__info1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
}

.project__info1 img {
  padding-right: 15px;
}

.project__logo {
  width: 360px;
  height: 270px;
}
.project__name {
  display: flex;
  align-content: flex-start;
  padding-left: 10px;
  font-size: 18px;
}

.author__name {
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
}

.review {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  padding-top: 15px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #6B6F7B;
  text-align: center;
  padding-left: 10px;
}
</style>