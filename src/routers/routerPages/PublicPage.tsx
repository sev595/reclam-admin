import LoginPage from "src/content/admin/auth/LoginPage";
import PublicRouter from "../types/PublicRouter";

const PublicPageRoute: PublicRouter = {
  isPrivate: false,
  routerProps: [
    {
      path: "/admin/login",
      element: <LoginPage />,
    },
  ],
};

export default PublicPageRoute;
