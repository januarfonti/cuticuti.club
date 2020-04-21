<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Home</h1>
    <b-row>
      <b-col cols="6">
        <b-img src="http://placehold.it/750x450" fluid rounded alt class="mb-4"></b-img>
      </b-col>
      <b-col cols="6">
        <h2>{{ page }}</h2>
        <p>{{ description }}</p>

        <b-button
          @click="loginPage()"
          block
          variant="outline-primary"
          class="mr-2"
        >{{ $t('login.LOGIN') }}</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Safetec Demo'
  },
  data () {
    return {
      page: 'Safetec Demo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  mounted () {
    console.log(process.env.VUE_APP_SECRET)
  },
  methods: {
    loginPage () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
.light-color,
.light-color:hover {
  color: #fff;
}
</style>
