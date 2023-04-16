import { createRoot } from "react-dom/client";
import Root from "./Root.tsx";
import {configureStore} from './store/index.ts'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore()
console.log(store, 'store');

root.render(<Root store={store} />); 