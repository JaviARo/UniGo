import { Header, Footer } from "../components/Control";
import FilledContent from "../components/FilledContent";

function Create() {
  return (
    <>
      <div id="createPage">
        <Header />
        <FilledContent edit={false}/>
        <Footer />
      </div>
    </>
  );
}

export default Create;
