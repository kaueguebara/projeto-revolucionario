<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar class="bg-grey-4 text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Ogramac </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Principais Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer class="bg-grey-4 text-black">
      <div class="footer-left">
        <h2>Desenvolvido por</h2>
        <ul>
          <li>Eduardo Casagrande</li>
          <li>Kauê Guebara</li>
          <li>Vinícius Bordin</li>
        </ul>
      </div>

      <div class="footer-center">
        <img src="https://www.fam.br/wp-content/uploads/2022/12/arte-5.png" />
      </div>

      <div class="footer-right">
        <div class="row items-center" style="gap: 8px">
          <q-icon name="location_on" size="md" />

          <span style="font-size: 1rem">FAM - Faculdade de Americana</span>
        </div>

        <div class="row items-center" style="gap: 8px">
          <q-icon name="phone" size="md" />

          <span style="font-size: 1rem">4022-8922</span>
        </div>

        <div class="row items-center" style="gap: 8px">
          <q-icon name="school" size="md" />

          <span style="font-size: 1rem">Desenvolvimento Web</span>
        </div>
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
footer {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 10vw;
  border-top: 1px solid #cfcfcf;

  .footer-left {
    margin-left: 10vw;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 2;
    }

    ul > li {
      font-size: 1rem;
      padding: 2px 0px;
    }
  }

  .footer-center {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 140px;
    }
  }

  .footer-right {
    margin-right: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .location-img {
    box-sizing: border-box;
    height: 40px !important;
    padding: 0px 10px;
  }
}

footer > * {
  min-width: 20vw;
}

@media (max-width: 1024px) {
  .footer-center > img {
    width: 18vw;
  }

  .footer-left > h2 {
    font-size: 1.2rem;
  }

  .footer-left > ul > li,
  .footer-right-img {
    width: 80%;
  }
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }

  .footer-left {
    margin: 0 auto;
  }

  .footer-left > h2 {
    font-size: 1.2rem;
  }

  .footer-left > ul > li {
    padding-bottom: 6px;
  }

  .footer-center > img {
    width: 40vw;
    max-width: 200px;
  }

  .footer-right {
    margin: 0 auto;
  }

  .footer-left > ul > li,
  .footer-right-img {
    width: 80%;
  }
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

// Ícones
// https://fonts.google.com/icons
const linksList = [
  {
    title: "Home",
    caption: "Início",
    icon: "home",
    link: "/home",
  },
  {
    title: "Produtos",
    caption: "Conheça nossos produtos",
    icon: "category",
    link: "/products",
  },
  {
    title: "Feedback",
    caption: "Feedbacks dos Produtos",
    icon: "feedback",
    link: "/feedback",
  },
  {
    title: "Contato",
    caption: "Adquira nosso produtos",
    icon: "contact_page",
    link: "/contact",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
