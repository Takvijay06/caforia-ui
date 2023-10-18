import { About } from "../components/pages/about";
import { Contact } from "../components/pages/contact";
import { Home } from "../components/pages/home";

const pageRoutes = [
  { path: "", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
];

export default pageRoutes;