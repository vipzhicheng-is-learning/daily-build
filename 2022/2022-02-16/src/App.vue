<script setup>
import { onMounted } from "vue";
import Prism from 'prismjs';
import "prismjs/themes/prism-dark.css";
const code = `function hello(){
  console.log(Hello World)
}
`;



onMounted(() => {
  Prism.highlightAll()
})

</script>

<template>
<pre ><code class="language-javascript">{{code}}</code></pre>
</template>

<style>

</style>