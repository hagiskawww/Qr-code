import {Routes, Route } from "react-router-dom";
import {QrCodeGenerator} from "./components/Generator/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/Scanner/QrCodeScanner.jsx";
import {Header} from "./components/Header/Header.jsx";
import {HistoryGenerate} from "./components/History/HistoryGenerate.jsx";
import {HistoryScan} from "./components/History/HistoryScan.jsx";
import {History} from "./components/History/History.jsx";

export const Layout = () => {

    return (
        <div>
            <Header/>

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/history" element={<History />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/history-scann" element={<HistoryScan />} />
                <Route path="/history-generate" element={<HistoryGenerate />} />
            </Routes>

        </div>
    );
}