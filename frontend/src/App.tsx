import NavBar from "./components/navbar";
import Footer from "./components/footer";
import DataTable from "./components/data-table";
import BarChart from "./components/bar-chart";
import DonutChart from "./components/donut-chart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">
          Sales Dashboard
        </h1>

        <div className='row px-3'>
        <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Success rate (%)</h5>
            <BarChart />
          </div>
          <div className='col-sm-6'>
            <h5>All Sales</h5>
            <DonutChart />
          </div>
        </div>

        <div className='py-3'>
          <h2 className='text-primary'>All Sales</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
