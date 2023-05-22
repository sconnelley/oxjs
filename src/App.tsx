import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { MonacoEditor } from "./Editor";

function App() {
  return (
    <div className="container">
      <h1>Test</h1>
      <div>
        <SandpackProvider template="react" theme="dark">
          <SandpackLayout>
            <MonacoEditor />
            <SandpackPreview style={{ height: "100vh" }} />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}

export default App;
