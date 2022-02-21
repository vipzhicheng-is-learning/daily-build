<script setup>

import { highlighter } from './highlighter'
const code = `function () {
  console.log('Hello world');
}
`

const html = highlighter.codeToHtml(code, {
  lang: 'js',
})
</script>

<template>
<div v-html="html"></div>
</template>

<style>

</style>