import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import {App} from "./App";

const container = document.getElementById('root');
const root = createRoot(container!);

const app =(
  <StrictMode>
    <App />
  </StrictMode>
)

root.render(app)