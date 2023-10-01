<template>
  <q-page>
    <body>
      <h1 class="welcome">Bem-vindo à Ogramac</h1>

      <div class="box">
        <h2>
          Na Ogramac, acreditamos que a inovação deve ser orientada pela empatia
          e pela busca incansável de melhorar a vida das pessoas. Somos uma
          empresa dedicada a criar produtos que fazem exatamente isso - tornar a
          vida das pessoas mais fácil, mais saudável e mais agradável.
        </h2>
      </div>
    </body>
  </q-page>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.welcome {
  font-size: 50px;
  display: flex;
  justify-content: center;
}
.box {
  font-size: 20px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 8px 8px 1px;
  width: 100%;
  border-radius: 10px;
  background-color: #e7e7e7;
  padding: 20px 0px 40px;
  max-width: 800px;
}
</style>

<style></style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "homePage",
});
</script>
