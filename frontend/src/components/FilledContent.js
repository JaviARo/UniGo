import "./filledContent.css";

function FilledContent() {
  return (
    <div id="filledContentHeight">
      <div id="filledContentBackground">
        <h2 id="designTitle">Título</h2>
        <div id="designCanvas"></div>
        <div id="editButtons">
          <button className="editButton">Seleccionar archivo</button>
          <button className="editButton">Guardar cambios</button>
        </div>
      </div>
    </div>
  );
}

export default FilledContent;
