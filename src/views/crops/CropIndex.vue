<template>
    <div v-if="crops.length>0">
        <crop-card-component :crops="crops"></crop-card-component>

    </div>
    <div v-else>
        <h1 class="text-danger">crops loading...</h1>
    </div>

  
</template>

<script>
import CropCardComponent from '../../components/farmfresh/CropCardComponent.vue'
import axios from 'axios'
export default {
  components: { CropCardComponent },
  data(){
    return {
        crops:[]
    };
  },
  created(){
    this.getCrops();

  },
  methods:{
    getCrops(){
        axios.get('http://127.0.0.1:8000/api/crops').then(res=>{
            this.crops=res.data;
            console.log(res.data);
        })
    }
  }

}
</script>

<style>

</style>