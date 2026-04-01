import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {routes} from "./router/routes.tsx";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//       <Provider store={store}>
//           <RouterProvider router={routes}/>
//       </Provider>
//   </StrictMode>,
// )

createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <RouterProvider router={routes}/>
    </StrictMode>,
)
