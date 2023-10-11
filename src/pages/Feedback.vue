<template>
  <q-page>
    <body>
      <section>
        <h1 class="title">Feedback de usuários</h1>

        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cbWCDGICsVk?si=hnLE56DaLD9a1AIG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </body>
  </q-page>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin: 0;
}
.title {
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 40px;
}

.video {
  display: flex;
  justify-content: center;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "feedbackPage",
});
</script>
