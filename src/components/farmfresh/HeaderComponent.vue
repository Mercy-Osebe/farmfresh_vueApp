<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid px-5 d-none d-lg-block">
      <div class="row gx-5 py-3 align-items-center">
        <div class="col-lg-3">
          <div class="d-flex align-items-center justify-content-start">
            <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
            <h2 class="mb-0">+012 345 6789</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex align-items-center justify-content-center">
            <a href="index.html" class="navbar-brand ms-lg-5">
              <h1 class="m-0 display-4 text-primary">
                <span class="text-secondary">Farm</span>Fresh
              </h1>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <h4  v-if="userStore.token">Welcome:{{ userStore.user.name }}</h4>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5"
    >
      <a href="index.html" class="navbar-brand d-flex d-lg-none">
        <h1 class="m-0 display-4 text-secondary">
          <span class="text-white">Farm</span>Fresh
        </h1>
       
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0">
          
            <router-link to="/"  class="nav-item nav-link">Home</router-link>
            <router-link to="/about"  class="nav-item nav-link">About</router-link>
            <router-link to="/crops"  class="nav-item nav-link">Crops</router-link>
            <router-link to="/addCrop"  class="nav-item nav-link" v-show="userStore.token">Add Crop</router-link>            
            <router-link to="/loginUser" class="nav-item nav-link" v-if="!userStore.token">Login User</router-link>
            <router-link to="/registerUser" class="nav-item nav-link" v-show="!userStore.token">Register User</router-link>
            <button class="nav-item nav-link btn" v-show="userStore.token">Logout</button>
            

        </div>
      </div>
    </nav>

    <!-- Navbar End -->
  </div>
</template>

<script>
import axios from 'axios';

import { useUserStore } from '../../stores/user';
export default {
  setup(){
    let userStore=useUserStore();
    return {
      userStore
    };
  },
  methods:{
   
  }
};
</script>

<style></style>
