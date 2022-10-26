import "./style/App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  // useEffect(() => {
  //   console.log(currentPage);
  // }, [currentPage]);

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "news" && <div>News</div>}
      {currentPage === "contact" && <div>Contact</div>}
      {currentPage === "about" && <div>About Us</div>}
      <Footer />
    </div>
  );
}

export default App;
