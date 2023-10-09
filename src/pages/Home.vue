<template>
  <q-page>
    <body>
      <section>
        <h1 class="main-title">Bem-vindo à Ogramac</h1>

        <div>
          <h2 class="main-content">
            Na Ogramac, acreditamos que a inovação deve ser orientada pela
            empatia e pela busca incansável de melhorar a vida das pessoas.
            Somos uma empresa dedicada a criar produtos que fazem exatamente
            isso - tornar a vida das pessoas mais fácil, mais saudável e mais
            agradável.
          </h2>
        </div>
      </section>
    </body>
  </q-page>
</template>

<style>
section {
  text-align: center;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 140px;
  padding: 0 40px;
}
.main-title {
  font-size: 60px;
  display: flex;
  justify-content: center;
}

.main-content {
  font-size: 30px;
  display: flex;
  justify-content: center;
}
</style>

<style></style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "homePage",
});
</script>
