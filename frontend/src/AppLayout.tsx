import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppLayout() {
  return (
    <div className="app min-h-100">
      <nav>
        <Header />
      </nav>

      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout