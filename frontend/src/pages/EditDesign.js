import { Header, Footer } from "../components/Control";
import FilledContent from "../components/FilledContent"

function EditDesign() {
  return (
    <>
      <div id="editDesign">
        <Header />
          <FilledContent edit={true}/>
        <Footer />
      </div>
    </>
  );
}

export default EditDesign;