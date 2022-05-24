import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Footer } from "./components/Footer/index.jsx";

import Navbar from "./components/Navbar/index.jsx";
import Home from "./pages/Home/index.jsx";

function RouteComponent() {
    return (
        <Router>
            {/* Navbar Section */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {/* Footer Section */}
            <Footer />
        </Router >
    );
}

export default RouteComponent;
