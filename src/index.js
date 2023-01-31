import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Amm } from './components/Amm';
import './index.css';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Amm />
    </BrowserRouter>
)
