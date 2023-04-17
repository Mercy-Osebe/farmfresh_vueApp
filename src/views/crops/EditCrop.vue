<template>
  <div class="card">
    <form @submit.prevent="editCrop()">
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
      </div>
      <div class="mb-3">
        <button class="btn btn-success">Edit Crop</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      crop: {
        name: "",
        desc: "",
      },
    };
  },
  created() {
    this.getStudent();
  },
  methods: {
    async getStudent() {
      let id = this.$route.params.id;
      await axios.get(`http://127.0.0.1:8000/api/crop/${id}`).then((res) => {
        this.crop = res.data;
        console.log(res);
      });
    },
    async editCrop() {
      let id = this.$route.params.id;
      await axios
        .put(`http://127.0.0.1:8000/api/crop/${id}/edit`, this.crop)
        .then((res) => {
          console.log(res);
          this.crop = {
            name: "",
            desc: "",
          };
        });
      this.$router.replace("/crops");
    },
    
  },
};
</script>

<style></style>
