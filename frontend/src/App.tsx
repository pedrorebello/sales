import NavBar from "./components/navbar";
import Footer from "./components/footer";
import DataTable from "./components/data-table";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">
          Hello 1
        </h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
