<script setup lang="ts">
import AppCode from '../AppCode.vue'
</script>

<template>
  <p>If you define global error this function will work everytime when an error occured.</p>
  <AppCode
    title="ErrorView.tsx"
    :code="[
      '<FetchProvider',
      `--globalError={e => {`,
      `----console.log('global error');`,
      `----console.log(e);`,
      `--}}`,
      `-- {...other props}`,
      '}'
    ]"
  />
</template>
