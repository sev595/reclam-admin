import Users from "src/content/admin/Users/UsersTable";
import ProtectedRoute from "../types/ProtectedRoute";
import NewUser from "src/content/admin/Users/NewUser";
import User from "src/content/admin/Users/User";
import EditUserConteiner from "src/content/admin/Users/EditUsers";
import Posts from "src/content/admin/Posts/PostTable";
import NewPost from "src/content/admin/Posts/NewPost";
import Post from "src/content/admin/Posts/Post";
import EditPostConteiner from "src/content/admin/Posts/EditPost";
import SidebarLayout from "src/layouts/SidebarLayout";
import { ReactNode } from "react";

const Routers = [
  {
    path: "/admin/users",
    element: <Users />,
  },

  {
    path: "/admin/users/:id",
    element: <User />,
  },
  {
    path: "/admin/users/new",
    element: <NewUser />,
  },
  {
    path: "/admin/users/:id/edit",
    element: <EditUserConteiner />,
  },

  {
    path: "/admin/posts",
    element: <Posts />,
  },
  {
    path: "/admin/posts/new",
    element: <NewPost />,
  },
  {
    path: "/admin/posts/:id",
    element: <Post />,
  },
  {
    path: "/admin/posts/:id/edit",
    element: <EditPostConteiner />,
  },

];

const MainWrapper = (children: ReactNode) => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarLayout />
      <div
        style={{
          marginTop: "68px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: Routers.map((item) => {
    return {
      path: item.path,
      element: MainWrapper(item.element),
    };
  }),
};

export default ProtectedPageRoute;
