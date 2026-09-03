<script setup lang="ts">
import BasePanel from "@/components/BasePanel.vue";
</script>

<template>
  <article>
    <section>
      <p>I wanted a UI library that I can use in multiple personal Vue projects, so I decided to create a core-ui package that I publish on GitHub packages.  Under the hood, <a href="https://primevue.org/">PrimeVue</a> is used in "<a href="https://primevue.org/theming/unstyled/">hybrid</a>" mode, which essentially disables their styling and allows me to set up my own CSS from their <a href="https://github.com/primefaces/primevue-tailwind/releases">stock CSS files.</a></p>
    </section>
    <BasePanel />
  </article>
</template>
