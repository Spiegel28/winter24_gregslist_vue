


<template>
    <div class="container">
        <div class="row">
            <div class="col-12 my-2">
                <h1>
                    Houses
                </h1>
            </div>
        </div>
        <div class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3 house-card">
            <!-- <img src="house.imgUrl" class = "img-fluid" alt="house.bed + '' + house.bath"> -->
            <!-- <div class="house-title">
                <p class="fs-4 mb-1 ms-1">{{ house.bedroom }} {{ house.bath }}</p>
            </div> -->
            <HouseCard :houseProp="house" />
        </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted, popScopeId } from 'vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState';
import HouseCard from '../components/HouseCard.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            // console.log('House page Mounted');
            getHouses();
        });
        return {
            houses: computed(() => AppState.Houses)
        };
    },
    components: { HouseCard }
}
</script>


<style lang="scss" scoped>
</style>
