<template>
  <div class="container">
    <b-card class="mt-3">
      <template v-slot:header>{{ $t('login.TITLE') }}</template>

      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>Something wrong! Please check your login credential...</p>
        <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
      </b-alert>

      <b-form @submit="onSubmit">
        <b-form-group :label="$t('login.EMAIL')" label-for="email">
          <ValidationProvider rules="required|email" v-slot="validationContext">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              :state="getValidationState(validationContext)"
              required
              placeholder="Enter email"
            ></b-form-input>

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>

          <!-- This is a form text block (formerly known as help block) -->
          <b-form-text id="input-live-help">user: {{ userData.email }}</b-form-text>
        </b-form-group>

        <b-form-group :label="$t('login.PASSWORD')" label-for="password">
          <ValidationProvider rules="required" v-slot="validationContext">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              :state="getValidationState(validationContext)"
              required
              placeholder="Enter password"
            ></b-form-input>

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>
          <small>password: {{ userData.password }}</small>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">{{ $t('login.LOGIN') }}</b-button>
        <b-button variant="primary" disabled v-if="authenticating">
          <b-spinner small type="grow"></b-spinner>verifying your details...
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  metaInfo: {
    title: 'Login',
    titleTemplate: '%s | Safetec Demo',
    description: 'Login page for Safetec Demo using best directory structure and uses of store.'
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      userData: {
        email: 'admin@admin.com',
        password: '12345'
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode',
      'authenticationSuccess'
    ])
  },
  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },

    ...mapActions('auth', ['login']),

    async onSubmit (evt) {
      evt.preventDefault()
      // Perform a simple validation that email and password have been typed in
      if (this.form.email !== '' && this.form.password !== '') {
        const loginSubmit = await this.login({ email: this.form.email, password: this.form.password })

        if (!loginSubmit) {
          this.showAlert()
          this.form.password = ''
        }
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
