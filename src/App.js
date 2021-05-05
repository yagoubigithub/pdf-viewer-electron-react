import "./App.css";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import PDFJSBackend from "./backends/pdfjs";

function App() {
  return (
    <div className="App">
      <PDFViewer backend={PDFJSBackend} src="/catalogue_mga_2019.pdf" />
    </div>
  );
}

export default App;
