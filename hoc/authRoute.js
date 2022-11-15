import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

const AuthRoute = ({ children }) => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  const router = useRouter();

  if (currentUser) {
    return <>{children}</>
  } else {
    router.push('/admin');
    return <></>
  }
};

export default AuthRoute;