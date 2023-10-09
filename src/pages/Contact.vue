<template>
  <q-page style="align-items: center; display: flex; justify-content: center">
    <section>
      <h1 class="title">Fale conosco!</h1>
      <h2 class="subtitle">Formulário de contato</h2>

      <form>
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required /><br /><br />

        <label for="email">Endereço de e-mail:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label for="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="5"
          cols="30"
          required
        ></textarea
        ><br /><br />

        <input type="submit" value="Enviar" />
      </form>
    </section>
  </q-page>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.title {
  color: #333;
  font-size: 3rem;
}

.subtitle {
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}

form {
  max-width: 400px;
  padding: 30px;
  background-color: #e7e7e7;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 8px 8px 1px;
}

label {
  display: block;
  margin-bottom: 0px;
  color: #333;
  font-size: 1rem;
  font-weight: 400;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 0px;
}

input[type="submit"] {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
}

input[type="submit"]:hover {
  background-color: #555;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactPage",
});
</script>
