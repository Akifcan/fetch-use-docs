<script setup lang="ts">
import AppCode from '../AppCode.vue'
</script>

<template>
  <p>Wrap your <b>app.tsx</b> file with <b>FetchProvider</b></p>
  <AppCode
    title="App.tsx"
    :code="[
      `import {FetchProvider} from 'fetch-use';`,
      `const BASE_URL = 'https://jsonplaceholder.typicode.com';`,
      `<FetchProvider baseUrl={BASE_URL} errorView={<ErrorView />}>`,
      `--<HomeScreen />`,
      `</FetchProvider>`
    ]"
  />
</template>
