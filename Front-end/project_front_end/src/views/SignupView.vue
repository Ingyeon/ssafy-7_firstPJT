<template>
  <div class="mx-auto my-3 p-3 border border-1 rounded" style="max-width:430px;">
    <h2>Signup</h2>

    <account-error-list v-if="authError"></account-error-list>
    <div style="max-width: 400px;" class="">
      <b-form @submit.prevent="signup(credentials)">
        <b-form-group id="username" label="Username:" label-for="username" >
          <b-form-input id="username" v-model="credentials.username" type="text" placeholder="Enter Username" required />
        </b-form-group>

        <b-form-group id="password1" label="Password:" label-for="password1">
          <b-form-input id="password1" v-model="credentials.password1" placeholder="Enter Password" type="password" required />
        </b-form-group>

        <b-form-group id="password2" label="Password Confirmation:" label-for="password2">
          <b-form-input id="password2" v-model="credentials.password2" placeholder="Check Password" type="password" required />
        </b-form-group>

        <b-button type="submit" variant="primary" class="mt-3">Signup</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style></style>
