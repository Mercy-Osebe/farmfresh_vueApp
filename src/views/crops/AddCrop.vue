<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="addCrop()">
          <div class="mb-3">
            <label for="crop_name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="crop_name"
              name="crop_name"
              v-model="crop.name"
            />
          </div>
          <div class="mb-3">
            <label for="crop_desc" class="form-label">Desc</label>
            <textarea
              class="form-control"
              id="crop_desc"
              name="crop_desc"
              rows="3"
              v-model="crop.desc"
            ></textarea>
            <p>{{ userStore.token }}</p>
          </div>
          <div class="mb-3">
            <button class="btn btn-success">Add Crop</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "../../stores/auth";
import { axiosApi, axiosAuthApi } from '../../utilities/axios';
export default {
  setup() {
    let userStore = useAuthStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      crop: {
        name: "",
        user_id: 2,
        desc: "",
      },
    };
  },

  methods: {
    addCrop() {
      if(this.userStore){
        axiosAuthApi.post("create", this.crop).then((res) => {
        alert(res.data.message);
        console.log(res);
        this.crop = {
          name: "",
          user_id: 2,
          desc: "",
        };
      });
      }else{
        axios.post("http://127.0.0.1:8000/api/create", this.crop).then((res) => {
        alert(res.data.message);
        console.log(res);
        this.crop = {
          name: "",
          user_id: 2,
          desc: "",
        };
      });
      }     

      this.$router.replace("/crops");
    },
  },
};
</script>

<style></style>
