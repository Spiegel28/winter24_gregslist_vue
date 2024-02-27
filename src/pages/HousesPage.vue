


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="m-3">
                    Houses
                </h1>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted, popScopeId } from 'vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService.js'

export default {
setup(){
    
    async function getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
        }
    }
    
    onMounted(() => {
        console.log('House page Mounted');
        getHouses()
    })

    return{}
}
}
</script>


<style lang="scss" scoped>

</style>
