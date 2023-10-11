<template>
  <q-page>
    <body>
      <section>
        <h1 class="main-title">Sobre o Produto</h1>

        <div class="idk">
          <div class="main-image">
            <img alt="produto" src="../assets/tablet_1.png" />
          </div>

          <div class="box">
            <p class="main-content">
              O MemoriesCare é um produto projetado para melhorar a qualidade de
              vida de pessoas que vivem com demência. Este produto é mais do que
              um simples tablet, e uma ferramenta que oferece apoio emocional e
              funcionalidade prática para pacientes e seus cuidadores, pois ele
              oferece:
            </p>

            <p class="main-content">
              <span style="font-weight: bold">Interface Intuitiva:</span> O
              MemoriesCare possui uma interface simples e intuitiva, adequada
              para pessoas com diferentes níveis de habilidades cognitivas. Não
              é necessário conhecimento técnico para operá-lo.
            </p>

            <p class="main-content">
              <span style="font-weight: bold">Toque Tátil:</span> Com grandes
              botões e uma tela sensível ao toque de fácil manuseio, os
              pacientes podem navegar com confiança e autonomia
            </p>

            <p class="main-content">
              <span style="font-weight: bold">Independência Preservada:</span>
              Graças à sua interface simples, os pacientes podem realizar
              tarefas diárias, como ver a hora, receber lembretes de
              medicamentos e ouvir músicas favoritas, com autonomia.
            </p>

            <p class="main-content">
              <span style="font-weight: bold">Estímulo à Memória:</span> O
              MemoriesCare ajuda a reforçar memórias antigas e a manter conexões
              emocionais. Exibe fotos, vídeos e mensagens de familiares que
              evocam lembranças queridas.
            </p>
          </div>
        </div>
      </section>
    </body>
  </q-page>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}

.idk {
  justify-content: space-around;
  display: flex;
}

.main-title {
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 60px;
  text-align: center;
  padding-bottom: 20px;
}

.main-content {
  font-size: 1.4rem;
  font-family: sans-serif;
  max-width: 1000px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.main-image {
  display: flex;
  justify-content: flex-start;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "aboutPage",
});
</script>
