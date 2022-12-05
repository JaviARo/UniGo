import { Header, Footer } from "../components/Control";
import Content from "../components/Content"
import './editor.css'

function Editor() {
  return (
    <>
      <div id="editorPage">
        <Header />
        <Content>
          <h1>Diseño</h1>
        </Content>
        <Footer />
      </div>
    </>
  );
}

export default Editor;