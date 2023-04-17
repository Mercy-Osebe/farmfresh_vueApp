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
          v-model="user.password"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
          <button class="btn btn-primary">Login user</button>
        </div>
      </div>
    </div>
  </form>

</div>
  
</template>

<script>
import { useUserStore } from '../../stores/user';

export default {
  setup(){
    let userData=useUserStore();
    return {
      userData
    }
  },

  data(){
    return {
      user:{
        email:'',
        password:null,
      }
    }
  },

  methods:{
    login(){
      this.userData.user=this.user;
      console.log(this.user)
      this.userData.login();
      this.$router.replace('/crops')
    }
  }


}
</script>

<style>

</style>