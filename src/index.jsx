// @ts-nocheck
import { createRoot } from "react-dom/client";
import Header from "./assets/Header.jsx";
import MainContent from "./assets/MainContent.jsx";
import Footer from "./assets/Footer.jsx";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
