import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBooksPage from './pages/SearchBooksPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { AllBooksPages } from "./pages/AllBooksPages";
import { AuthorsPage } from "./pages/AuthorsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchBooksPage/>,
    },
    {
        path: "/all",
        element: <AllBooksPages />
    },
    {
        path: "/authors",
        element: <AuthorsPage />
    }
]);
root.render(
  <React.StrictMode>
      <Nav
          activeKey="/">
          <Nav.Item>
              <Nav.Link href="/">Otsi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href="/all">Kõik raamatud</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href="/authors">Autorid</Nav.Link>
          </Nav.Item>
      </Nav>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
