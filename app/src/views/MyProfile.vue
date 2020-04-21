<template>
  <div class="container">
    <b-card class="mt-3">
      <template v-slot:header>{{ $t('myProfile.TITLE') }}</template>

      <pre>loggedIn: {{ loggedIn }}</pre>
      <small>{{ $t('footer.MADE_WITH') }}</small>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'myprofile',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('auth', ['loggedIn'])
  }
}
</script>
