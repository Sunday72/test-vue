<template>
    <p>
      <router-link :to="{name: 'Contact'}">Go to Home</router-link>
      <router-link :to="{name: 'About'}">Go to About</router-link>
    </p>
    <router-view></router-view>
</template>