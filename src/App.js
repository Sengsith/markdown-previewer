import React, { useState } from 'react';
import './App.scss';
import { marked } from 'marked';
import DEFAULT_EDITOR from './defaultEditor.js'

marked.setOptions({
  breaks: true
})

function App() {
  const [editor, setEditor] = useState(DEFAULT_EDITOR)

  const handleMessageChange = (e) => {
    setEditor(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="editor-header">
          <div class="toolbar">Editor</div>
          <textarea id="editor" rows="11" cols="70" value={editor} onChange={handleMessageChange}></textarea>
        </div>
        <div id="preview-box">
          <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(editor)}}></div>
        </div>
      </header>
    </div>
  );
}

export default App;