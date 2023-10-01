<template>
  <p>You can throw timeout error. If you pass <b>timeoutTtl</b> prop. default value is <b>30000</b></p>
  <p><b>Example</b></p>
  <AppCode
    title="TTL"
    :code="['sendRequest({', '--...other props', '--timeoutTtl: {', '----duration: 30000,', '--}', '})']"
  />
  <p>Also you can pass custom timeout callback function</p>
  <AppCode
    title="TTL"
    :code="[
      'sendRequest({',
      '--...other props',
      '--timeoutTtl: {',
      '----duration: 30000,',
      `----onExpired: () => console.log('on expired func')`,
      '--}',
      '})'
    ]"
  />
  <p>Catch timeout via global error handler</p>
  <AppCode
    title="TTL"
    :code="[
      '<FetchProvider',
      '--...other props',
      '--globalError={(error: any) => {',
      `----if (error?.response?.name === 'AbortError') {`,
      `----- console.log()`,
      '----}',
      '>'
    ]"
  />
</template>
