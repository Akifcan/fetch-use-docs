<script setup lang="ts">
import AppCode from '../AppCode.vue'
</script>

<template>
  <p>You can show a custom component when an error occured or you can turn off this view.</p>
  <AppCode title="ErrorView.tsx" :code="['const ErrorView = () => {', '--return <Text>error</Text>;', '};']" />
</template>
