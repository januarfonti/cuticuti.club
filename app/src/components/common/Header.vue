<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand to="/">Safetec Demo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!loggedIn" to="login">Login</b-nav-item>
            <b-nav-item-dropdown v-if="loggedIn" right>
              <template v-slot:button-content>
                <em>My Account</em>
              </template>
              <b-dropdown-item to="my-profile">My Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{ displayLocale }}</em>
              </template>
              <b-dropdown-item
                @click="switchLocale(item.lang)"
                v-for="(item, i) in langs"
                :key="`Lang${i}`"
                :value="item.lang"
                :class="[item.class]"
              >{{ item.langName.toUpperCase() }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      langs: [
        {
          lang: 'en',
          langName: 'English',
          class: 'btnEN'
        },
        {
          lang: 'es',
          langName: 'Espanol',
          class: 'btnES'
        },
        {
          lang: 'cn',
          langName: 'China',
          class: 'btnCN'
        }
      ]
    }
  },
  computed: {
    displayLocale () {
      return this.$i18n.locale
    },

    ...mapGetters('auth', ['loggedIn'])
  },
  methods: {
    switchLocale (lang) {
      this.$store.dispatch('setLocale', lang)
    },

    ...mapActions('auth', ['logout'])
  }
}
</script>
