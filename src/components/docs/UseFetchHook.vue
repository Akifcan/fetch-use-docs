<template>
  <p>This an useFetch hook example you can set headers, useCache option or useErrorView</p>
  <AppCode
    title="HomeScreen.tsx"
    :code="[
      'const {',
      '--sendRequest: getTodoRequest,',
      '--data: todoData,',
      '--error: todoError,',
      '--destroy: todoDestroy,',
      `} = useFetch<TodoProps[]>('/todos/1', 'GET', {`,
      '--headers: {',
      `----authorization: 'Bearer jwt',`,
      '--},',
      `--useErrorView: false,`,
      `--useCache: true`,
      '})'
    ]"
  />
  <p>We add alias for <b>sendRequest</b> because we'll have more useFetch hook</p>
  <p>Now you can call <b>getTodoRequest()</b> whenever you want.</p>

  <AppCode
    title="Call Function"
    :code="['useEffect(() => {', '--getTodoRequest();', '--return () => {', '----todoDestroy();', '--};', '}, []);']"
  />
  <p>--</p>
  <p>Get the data</p>
  <AppCode
    title="Get the data"
    :code="[
      'useEffect(() => {',
      '--if (!todoData) {',
      '----return;',
      '--}',
      'console.log(todoData);',
      '}, [todoData]);'
    ]"
  />
  <p>--</p>
  <p>Get the error</p>
  <p>If useErrorView enabled error component will be shown.</p>
  <AppCode
    title="Get the error"
    :code="[
      'useEffect(() => {',
      '--if (!todoError) {',
      '----return;',
      '--}',
      'console.log(todoError.message);',
      'console.log(todoError);',
      '}, [todoError]);'
    ]"
  />
  <p>--</p>
  <p>Post request hook</p>
  <AppCode
    title="HomeScreen.tsx"
    :code="[
      'const {',
      'sendRequest: getPostRequest,',
      'data: postData,',
      'isLoading: postLoading,',
      'error: postError,',
      'destroy: postDestroy,',
      `} = useFetch<PostProps[]>('/', 'POST', {`,
      '--headers: {',
      `----a: 'b'`,
      '--},',
      '--useErrorView: false,',
      '--useCache: true',
      '--ttlCache: 60000',
      '})'
    ]"
  />
  <p>Send the request</p>
  <AppCode
    title="Post Request"
    :code="[
      'useEffect(() => {',
      `--getPostRequest({`,
      `----body: {name: 'jfla', song: 'good vibes'},`,
      `----contentType: 'application/json', //application/json | multipart/form-data`,
      `----params: {id: 20}, //if needed not required`,
      `--});`,
      '}, []);'
    ]"
  />
  <p>Get the data</p>
  <AppCode
    title="Get the data"
    :code="[
      'useEffect(() => {',
      '--if (!postData) {',
      '----return;',
      '--}',
      'console.log(postData);',
      '}, [postData]);'
    ]"
  />
</template>
