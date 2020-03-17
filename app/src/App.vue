<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      appName: process.env.VUE_APP_NAME
    }
  }
}
</script>
