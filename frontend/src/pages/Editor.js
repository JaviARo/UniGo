import { Header, Footer } from "../components/Control";
import FilledContent from "../components/FilledContent"
import './editor.css'

function Editor() {
  return (
    <>
      <div id="editorPage">
        <Header />
        <FilledContent>
          <h1>Diseño</h1>
        </FilledContent>
        <Footer />
      </div>
    </>
  );
}

export default Editor;