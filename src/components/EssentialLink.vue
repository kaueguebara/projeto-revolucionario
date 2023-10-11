<template>
  <q-item
    clickable
    class="column justify-center items-center text-center"
    style="border-radius: 4px"
    tag="a"
    :href="link"
  >
    <q-item-section v-if="icon">
      <q-icon size="sm" :name="icon" />
    </q-item-section>

    <span>
      {{ title }}
    </span>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
