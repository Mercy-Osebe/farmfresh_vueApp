<template>
<div class="container col-md-6">
    <form @submit.prevent="login()">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Password:</strong>
          <input type="password" name="password" class="form-control" 
          v-model="user.password"/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </form>

</div>
</template>

<script>
import { useAuthStore } from '../../stores/auth';

export default {
    setup(){
        let authStore= useAuthStore();
        return {
            authStore
        }
    },
    data(){
        return {
            user:{
                name:'',
                email:'',
                password:null
            }
        }
    },
    methods:{
        login(){
            this.authStore.user=this.user;
            this.authStore.login();
            console.log(this.user);
            this.$router.replace('/crops');
            

        }
    },
    async created() {
        await console.log(this.authStore.token)

    
  },
};
</script>

<style></style>
