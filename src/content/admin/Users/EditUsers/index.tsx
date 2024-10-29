import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByIdEffect } from "src/store/effects/user/user.effect";
import EditUser from "./EditUser";
import { useToasts } from "react-toast-notifications";

const EditUserConteiner = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();

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
  return <EditUser user={user} />;
};
export default EditUserConteiner;
