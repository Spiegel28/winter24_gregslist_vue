<template>
        <router-link :to="{ name: 'HouseDetails', params: { houseID: houseProp.id } }">
            <img src="houseProp.imgUrl" class = "img-fluid" alt="houseProp.bed + '' + houseProp.bath" role = "button">
            <div class="house-title">
                <p class="fs-4 mb-1 ms-1">{{ house.bedroom }} {{ house.bath }}</p>
            </div>
        </router-link>
</template>


<script>
import { computed, onMounted, popScopeId } from 'vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState';
import { House } from '../models/House.js';

export default {
    props: {
        houseProp: {type: House, required: true}
    },
setup(){
    


    return{
        // houses: computed(()=> AppState.Houses[0])
    }
}
}
</script>


<style lang="scss" scoped>
img {
  height: 40vh;
  width: 40vh;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  box-shadow: 2px 3px 10px black;
}

.house-title {
  position: absolute;
  bottom: 0;
  color: white;
  text-shadow: 1px 1px 3px black;
  font-weight: bold;
}
</style>