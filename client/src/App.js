import Editor from '@monaco-editor/react';

function App() {
  return (
    <Editor height="100vh" language="python" value="console.log('Hello, World!');" />
  );
}

export default App;