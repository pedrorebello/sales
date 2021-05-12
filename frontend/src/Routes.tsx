import Footer from './components/Footer';
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/dashboard'>
                <DashBoard />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;