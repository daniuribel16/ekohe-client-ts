import { useEffect, useState } from "react";
import storage, { LOGGED_IN } from "../helpers/storage";

const useLoggedUser = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    (async function() {
      const logged = storage.get(LOGGED_IN);
      setIsLoggedin(Boolean(logged));
    })()
  }, []);

  return isLoggedin;
}

export default useLoggedUser;
