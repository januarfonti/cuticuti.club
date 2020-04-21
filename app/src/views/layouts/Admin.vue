<template>
  <div>
    <b-container>
      <app-header />
      <slot />
    </b-container>
  </div>
</template>

<script>
import Header from './../../components/common/Header'

export default {
  name: 'Admin',
  components: {
    'app-header': Header
  }
}
</script>
