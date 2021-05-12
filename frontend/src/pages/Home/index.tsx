import { Link } from "react-router-dom";

const Home = () => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">Sales</h1>
            <p className="lead">Have a objective and informed view on your sales</p>
            <hr />
            <p>This application build and show a dashboard from data provided by a backend written with the Spring framework</p>
            <Link className="btn btn-primary btn-lg" to="/dashboard">
                Open dashboard
            </Link>
        </div>
    </div>
)

export default Home;