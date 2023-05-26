<template>
  <p>useFetch</p>
  <AppCode
    title="useFetch()"
    :code="[
      `export const useFetch = <T>(`,
      `--uri: string`,
      `--method: 'POST' | 'GET' | 'PUT' | 'PATH' | 'DELETE'`,
      `--options: {`,
      `----headers?: Record<string, any>;`,
      `----useErrorView?: boolean; //true`,
      `----useCache?: boolean; //false`,
      `----ttlCache?: number; //300000`,
      `----useLogs?: boolean; //false`,
      '--}',
      `</FetchProvider>`
    ]"
  />
  <p>send request</p>
  <AppCode
    title="sendRequest()"
    :code="[
      `const sendRequest = async (props?: {`,
      `--uri: string`,
      `--params?: Record<string, any>;`,
      `--contentType?: 'application/json' | 'multipart/form-data'`
    ]"
  />
</template>
