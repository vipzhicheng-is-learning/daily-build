
<script setup lang="ts">

import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/solarized.css';

import './theme/base2tone-sea-dark.css';

import 'code-mirror-themes/themes/made-of-code.css'

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/markdown/markdown';

import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/edit/matchbrackets.js';

import 'codemirror/keymap/vim.js';

import { onMounted } from 'vue'
onMounted(() => {
  let editor = document.getElementById("editor") as HTMLTextAreaElement;
  editor.value = "";

  // @ts-ignore
  CodeMirror.commands.save = function () {
    console.log("save");
    alert('save')
  };

  CodeMirror.fromTextArea(editor as HTMLTextAreaElement, {
    mode: 'markdown',
    theme: 'markdown',
    lineNumbers: true,
    lineWrapping: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: true,
    showCursorWhenSelecting: true,
    keyMap: 'vim',
    extraKeys: {
      // indent with spaces
      Tab: (cm: CodeMirror.Editor) => {
        const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      },
    },
  });
});



</script>

<template>
<textarea id="editor"></textarea>
</template>

<style>
.CodeMirror {
  width: 100%;
  height: 100%;
}
</style>