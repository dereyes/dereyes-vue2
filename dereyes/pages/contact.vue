<template>
  <section>
    <h1>Contact</h1>
    <form @submit.prevent="onSubmit">
      <div class="formGroup">
        <label for="formName">Name</label>
        <input
          id="formName"
          v-model="form.name"
          autocomplete="true"
          type="text"
          required
        />
      </div>
      <div class="formGroup">
        <label for="formMessage">Message</label>
        <textarea id="formMessage" v-model="form.message" rows="6" required />
      </div>
      <div class="formGroup">
        <label for="formEmail">Email</label>
        <input
          id="formEmail"
          v-model="form.email"
          autocomplete="true"
          type="email"
          required
        />
      </div>
      <button type="submit">Send</button>
      <recaptcha @error="onError" @success="onSuccess" />
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      message: '',
      email: ''
    }
  }),
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    onError(error) {
      // recaptcha fails
      alert('Error happened:', error)
    },
    async onSubmit() {
      try {
        // form succeeds
        const token = await this.$recaptcha.getResponse()
        alert('ReCaptcha token:', token)
        const data = this.form
        const url =
          'https://script.google.com/macros/s/AKfycbw3OqF_yQ8S1gdTuYfLyZzbsuCunk3iZi0sjvdwcARh_XocHwjt/exec'
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
        // url encode form data for sending as post data
        const encoded = Object.keys(data)
          .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
          })
          .join('&')
        xhr.send(encoded)
      } catch (error) {
        // form fails
        alert(error)
      }
    },
    onSuccess(token) {
      // recaptcha fails
      alert('Succeeded:', token)
    }
  }
}
</script>
