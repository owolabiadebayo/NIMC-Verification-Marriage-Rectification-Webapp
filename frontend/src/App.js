import { BrowserRouter, Routes, Route } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import VirtualNin from "./pages/VirtualNin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/virtual_nin" element={<VirtualNin />} />
        <Route exact path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
