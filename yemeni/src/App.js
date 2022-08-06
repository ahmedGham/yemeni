import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import "./index.css";
import CategoryListenerProvider from "./CustomHooks/useCategoryListener";

function App() {
  return (
      <CategoryListenerProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </CategoryListenerProvider>
  );
}

export default App;
