<template>
  <section>
    <h1>Contact</h1>
    <form>
      <div class="formGroup">
        <label for="formName">Name</label>
        <input id="formName" autocomplete="true" type="text" required />
      </div>
      <div class="formGroup">
        <label for="formMessage">Message</label>
        <textarea id="formMessage" rows="6" required />
      </div>
      <div class="formGroup">
        <label for="formEmail">Email</label>
        <input id="formEmail" autocomplete="true" type="email" required />
      </div>
      <button type="submit">Send</button>
    </form>
  </section>
</template>
