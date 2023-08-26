<template>
  <section>
    <article>
      <p>Version: v5.0.5</p>
      <h4>Error property type changed.</h4>
      <p>
        The <b>error</b> property type has been edited. (Won't be string anymore) Now you can access the response object
        directly when an error occured.
      </p>
      <p><b>todoError.response</b> or <b>todoError.message</b></p>
      <p>IMPORTANT NOTE: if request failed in catch block <b>response</b> property will be null.</p>
    </article>
  </section>
</template>
