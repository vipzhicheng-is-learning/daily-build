import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { initVimMode } from 'monaco-vim';
import "./style.css";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

const editor = monaco.editor.create(document.getElementById("container"), {
  value: "function hello() {\n\talert('Hello world!');\n}",
  language: "javascript",
  theme: "vs-dark",
  scrollbar: {
    vertical: "auto",
    horizontal: "auto",
  },
  automaticLayout: true,
  readOnly: true,
});

const vimMode = initVimMode(editor, document.getElementById('my-statusbar'))
