import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.scss';
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
)
