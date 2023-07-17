<template>
  <p>You can set the default headers like axios.</p>
  <AppCode
    title="HomeScreen.tsx"
    :code="[`import {UseFetchConst} from 'fetch-use'`, `UseFetchConst.headers = {authorization: Bearer 'asdfasdf'}`]"
  />
</template>
