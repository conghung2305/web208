import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import LayoutAdmin from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientLayout from "./layouts/ClientLayout";
import Cart from "./pages/Cart";
import Homepage from "./Homepage";
import AdminCategoriesList from "./pages/admin/categories/List";
import AdminCategoriesAdd from "./pages/admin/categories/Add";
import AdminCategoriesEdit from "./pages/admin/categories/Edit";
import NotFoundPage from "./components/Notfound";
import ProductDetail from "./pages/ProductDetails";


const routeConfig = [
  {
    path: "admin",
    element: <LayoutAdmin />, 
    children: [
      {
        path: "",
        element: <AdminLayout />, 
        children: [
          {
            path: "categories/list",
            element: <AdminCategoriesList />,
          },
          {
            path: "categories/add",
            element: <AdminCategoriesAdd />,
          },
          {
            path: "categories/edit/:id",
            element: <AdminCategoriesEdit />,
          },
          {
            path: "product/list",
            element: <AdminProductList />,
          },
          {
            path: "product/add",
            element: <AdminProductAdd />,
          },
          {
            path: "product/edit/:id",
            element: <AdminProductEdit />,
          }
        ],
      },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path:"product/:id",
    element:<ProductDetail/>
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
