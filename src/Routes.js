import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/index.jsx";
import Home from "./pages/Home/index.jsx";

function RouteComponent() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router >
    );
}

export default RouteComponent;
