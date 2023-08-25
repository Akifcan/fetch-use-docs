<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  title: string
  code: string[]
}
const codeRef = ref()
defineProps<Props>()
const copyButtonText = ref('copy')
const handleCopy = () => {
  navigator.clipboard.writeText(codeRef.value.textContent.replace(/(\s\s\s*)/g, ' ')).then(
    () => {
      copyButtonText.value = 'Copied'
    },
    () => {
      copyButtonText.value = 'Failed copy'
    }
  )
}
</script>

<template>
  <div class="code">
    <div class="code--header">
      <p class="code--header-title">{{ title }}</p>
      <button class="copy" @click="handleCopy">{{ copyButtonText }}</button>
    </div>
    <div ref="codeRef" class="code--view">
      <div v-for="(x, index) in code" :key="index">
        <span v-if="x.startsWith('-')">
          <span v-for="v in x.split('-').length" :key="v">&nbsp;</span>
        </span>
        <!-- <span v-if="x.startsWith('--')">&nbsp; &nbsp;</span>
        <span v-if="x.startsWith('----')">&nbsp; &nbsp; &nbsp; &nbsp;</span>
        <span v-if="x.startsWith('-----')">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> -->
        {{
          x
            .split('')
            .filter((y) => y !== '-')
            .join('')
            .replace('//', '-')
        }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.code {
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

.code--header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

p {
  margin: 0;
}

.copy {
  border: 1px solid white;
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 3.5px;
  font-weight: 600;
  border-radius: 0.4rem;
  transition: 500ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
.copy:hover {
  letter-spacing: 6px;
}
</style>
