import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";

function RouteComponent() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </Router >
    );
}

export default RouteComponent;
