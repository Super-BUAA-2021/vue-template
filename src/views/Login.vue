<template>
  <div class="login">
    <form class="form-box">
      <h1>Login</h1>
      <label><input v-model="username" type="text" placeholder="Username"></label>
      <label><input v-model="password" type="password" placeholder="Password"></label>
      <button type="submit" @click="click_login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    click_login() {
      window.alert(this.username + this.password);
    }
  }
}
</script>

<style scoped>

</style>