import axios from "axios";
import { defineStore } from "pinia";
import { axiosAuthApi, axiosApi } from "../utilities/axios";

export const useUserStore = defineStore("authUser", {
  state: () => {
    return {
      user: {
        name: "",
        email: "",
        created_at: "",
        id: "",
        password:null
      },
      token: null,
    };
  },
  getters: {},
  actions: {
    async login() {
      await axiosApi
        .post("login", this.user)
        .then((res) => {
          console.log(res);
          this.user=res.data.user;
          this.token=res.data.token;
          // console.log(this.token)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async register(){
      await axiosApi
      .post("register", this.user)
      .then((res) => {
        console.log(res);
        this.user=res.data.user;
        this.token=res.data.token;
        // console.log(this.token)
      })
      .catch((error) => {
        console.log(error);
      });

    }

  },
});
