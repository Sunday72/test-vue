<template>
    <p>
      <router-link :to="{name: 'Home'}">Home</router-link> <br>
      <router-link :to="{name: 'About'}">About</router-link> <br>
      <router-link :to="{name: 'Login'}">Login</router-link> <br>
      <router-link :to="{name: 'Register'}">Register</router-link> <br>
    </p>
    <router-view></router-view>
</template>