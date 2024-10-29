import UserContainer from "./UserContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByIdEffect } from "src/store/effects/user/user.effect";
import { useToasts } from "react-toast-notifications";

const User = () => {
  const [user, setUser] = useState(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const { id } = useParams();

  const getUser = async (id: string) => {
    try {
      const user = await getUserByIdEffect(id);
      setUser(user);
    } catch (error) {
      addToast("user not found", { appearance: "error" });
      navigate("/admin/users");
    }
  };

  useEffect(() => {
    if (id) getUser(id);
  }, [id]);

  if (!user) return <div>User not exist</div>;
  return <UserContainer user={user} />;
};

export default User;
