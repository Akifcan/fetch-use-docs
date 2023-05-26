<template>
  <p>
    If you set <b>useCache</b> to <b>true</b> your request path will be store as key and response will be store as value
  </p>
  <p><b>Example</b></p>
  <AppCode
    title="Use Cache"
    :code="[
      'const cache {',
      `--products: '{name: 'phone', price: 100},'`,
      `--users: '{name: 'john', lastname: 'doe'}'`,
      '}'
    ]"
  />
  <p>
    Also there is <b>ttlCache</b> option default value is: <b>300000 (5 minute)</b>. After expiration that key will be
    removed.
  </p>
</template>
