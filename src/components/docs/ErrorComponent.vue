<script setup lang="ts">
import AppCode from '../AppCode.vue'
</script>

<template>
  <p>You can show a custom component when an error occured or you can turn off this view.</p>
  <p>Use <b>setError</b> from <b>useFetchWrapper</b> when you need to close error view back.</p>
  <AppCode
    title="ErrorView.tsx"
    :code="[
      `import {FetchProvider, useFetchWrapper} from 'fetch//-use'`,
      'const ErrorView = () => {',
      `--const {setError} = useFetchWrapper()`,
      `--return (`,
      `----<SafeAreaView>`,
      '------<Text>error view</Text>',
      `------<Button onPress={() => { setError(false) }} title='Hide' />`,
      '----</SafeAreaView>',
      `--)`,
      '}'
    ]"
  />
</template>
