<template>
  <q-page>
    <body>
      <section>
        <h1 class="main-title" style="margin: 30px 0">Bem-vindo à Ogramac</h1>

        <div>
          <h2 class="main-content">
            Na Ogramac, acreditamos que a inovação deve ser orientada pela
            empatia e pela busca incansável de melhorar a vida das pessoas.
            <br />Somos uma empresa dedicada a criar produtos que fazem
            exatamente isso - tornam a vida das pessoas mais fácil, mais
            saudável e mais agradável. <br /><br />Com a OGRAMAC, viver bem é
            <span class="text-bold">simples!</span>
          </h2>
        </div>

        <a style="color: blue; margin-top: 32px" href="/products">
          Conheça nossos produtos!
        </a>
      </section>
    </body>
  </q-page>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

section {
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  flex-direction: column;
}

.centered-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 15vw;
}

.main-title {
  font-size: 40px;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

.main-content {
  font-size: 1.5rem;
  line-height: 35px;
  max-width: 65vw;
}

a {
  margin-top: 15px;
  font-size: 20px;
}
a:link,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: grey;
}
a:active {
  text-decoration: none;
}
</style>

<style></style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "homePage",
});
</script>
