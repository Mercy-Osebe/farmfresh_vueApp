import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        id: null,
        name: "",
        email: "",
        password: null,
        password_confirmation: null,
        updated_at: null,
      },
      token: "",
    };
  },
  getters: {},
  actions: {
    async login() {
      await axios
        .post("http://127.0.0.1:8000/api/login", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          alert(res.data.message);
        });
    },
    async register() {
      await axios
        .post("http://127.0.0.1:8000/api/register", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          alert(res.data.message);
        });
    },
    async logout() {
      await axios
        .post("http://127.0.0.1:8000/api/logout", {
          token: this.token,
          "content-type": "application/json",
        })
        .then((res) => {
          console.log(res);
          this.user = {};
          alert(res.data.message);
        });
    },
  },
});
