<template>
  <q-page>
    <body>
      <h1 class="main-title">Sobre o Produto</h1>
      <h2 class="main-content">
        O MemoriesCare é um produto projetado para melhorar a qualidade de vida
        de pessoas que vivem com demência. Este produto é mais do que um simples
        tablet, e uma ferramenta que oferece apoio emocional e funcionalidade
        prática para pacientes e seus cuidadores, pois ele oferece:
      </h2>

      <p class="main-content">
        <strong>Interface Intuitiva:</strong> O MemoriesCare possui uma
        interface simples e intuitiva, adequada para pessoas com diferentes
        níveis de habilidades cognitivas. Não é necessário conhecimento técnico
        para operá-lo. <br />

        <strong>Toque Tátil:</strong> Com grandes botões e uma tela sensível ao
        toque de fácil manuseio, os pacientes podem navegar com confiança e
        autonomia <br />

        <strong>Independência Preservada:</strong> Graças à sua interface
        simples, os pacientes podem realizar tarefas diárias, como ver a hora,
        receber lembretes de medicamentos e ouvir músicas favoritas, com
        autonomia. <br />

        <strong>Estímulo à Memória:</strong> O MemoriesCare ajuda a reforçar
        memórias antigas e a manter conexões emocionais. Exibe fotos, vídeos e
        mensagens de familiares que evocam lembranças queridas. <br />
      </p>
    </body>
  </q-page>
</template>

<style>
.main-title {
  font-size: 65px;
  display: flex;
  justify-content: center;
}

.main-content {
  font-size: 35px;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "aboutPage",
});
</script>
