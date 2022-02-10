
<script setup lang="ts">

import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/material.css';
import 'codemirror/keymap/vim.js';

import { onMounted } from 'vue'
onMounted(() => {
  let editor = document.getElementById("editor") as HTMLTextAreaElement;
  editor.value = "";

  CodeMirror.fromTextArea(editor as HTMLTextAreaElement, {
    mode: 'markdown',
    theme: 'material',
    lineNumbers: true,
    lineWrapping: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
    keyMap: 'vim',
    // extraKeys: {
    //   Tab: (cm: CodeMirror.Editor) => {
    //     const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
    //     cm.replaceSelection(spaces);
    //   },
    // },
  });
});



</script>

<template>
<textarea id="editor" class="w-screen h-screen"></textarea>
</template>

<style>
.CodeMirror {
  width: 100%;
  height: 100%;
}
.CodeMirror-dialog-bottom {
  margin-top: -80px;
}
</style>