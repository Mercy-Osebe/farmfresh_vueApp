<template>
  <div class="container col-md-6">
    <form @submit.prevent="registerUser()">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="name" class="form-control" 
            v-model="user.name"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Email:</strong>
            <input type="email" name="email" class="form-control" v-model="user.email" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Password:</strong>
            <input type="password" name="password" class="form-control"  v-model="user.password"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Confirm Password:</strong>
            <input
              type="password"
              name="password_confirmation"
              class="form-control"
              v-model="user.password_confirmation"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../../stores/user';
export default {
  data(){
    return{
      user:{
        name:'',
        email:'',
        password:'',
        password_confirmation:''

      }
    }
  },
  setup(){
    let userStore=useUserStore();
    return {
      userStore
    };
  },
  methods:{
    registerUser(){
      this.userStore.user=this.user;
      this.userStore.register();
      this.$router.replace('/crops')

    }
  }
};
</script>

<style></style>
