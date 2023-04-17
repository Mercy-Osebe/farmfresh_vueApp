<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6" v-for="crop in crops" :key="crop.id">
            <div class="service-item bg-light text-center p-5 mb-3">
              <i class="fa fa-carrot display-1 text-primary mb-3"></i>
              <h4>Fresh Vegetables</h4>
              <h4>Crop name:{{ crop.name }}</h4>
              <p class="mb-0">
                {{ crop.desc }}
              </p>
            </div>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <router-link
                    class="btn btn-primary"
                    :to="'/crop/' + crop.id + '/edit'"
                    >Update Crop</router-link
                  >
                </div>
                <div class="col">
                  <button class="btn btn-danger" @click="deleteCrop(crop.id)">
                    Delete Crop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { axiosApi, axiosAuthApi } from '../../utilities/axios';
import { useUserStore } from '../../stores/user';
export default {
  setup(){
    let userStore=useUserStore();
    return {
      userStore
    }

  },
  props: ["crops"],
  // dont modify the prop make use pinia instead or get the crop independently here or use provide and inject.
  methods: {
    async deleteCrop(id) {
      // console.log(id);
      if(this.userStore){
        if (confirm("Are you sure you want to delete this item")) {
         await axiosAuthApi
          .delete(`crop/${id}/delete`)
          .then(res => {
            console.log(res);
          })

      }else{
        if (confirm("Are you sure you want to delete this item")) {
         await axiosAuthApi
          .delete(`http://127.0.0.1:8000/api/crop/${id}/delete`)
          .then(res => {
            console.log(res);
          })

      }
      }
      }
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
