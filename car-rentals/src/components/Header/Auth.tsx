import { useCallback, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useUserAuth from "../../hooks/useUserAuth";
import axios from "axios";
import { toast } from "react-hot-toast";

const Auth = () => {
  const userauth = useUserAuth();
  const loginmodal = useLoginModal();
  const registermodal = useRegisterModal();
  const [hidden, sethidden] = useState(true);
  const handlehiddentoggle = useCallback(() => {
    sethidden((value) => !value);
  }, [sethidden]);

  const handlelogout = useCallback(() => {
    axios
      .post("/auth/logout")
      .then((res) => {
        if (res) {
          toast.success(res.data.message);
          userauth.logout();
        }
      })
      .catch(() => {
        toast.error("Logout Error");
      });
  }, [userauth]);

  return (
    <div className="relative">
      <BiUserCircle
        onClick={() => handlehiddentoggle()}
        color="white"
        size={27}
      />
      {!hidden && (
        <div
          className="absolute min-w-[25vw] sm:min-w-[10vw] rounded-lg right-0 top-9 text-sm bg-[rgba(255,255,255,0.25)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
        backdrop-blur-[4px] -webkit-backdrop-blur-[4px]"
        >
          <div className="flex flex-col  cursor-pointer">
            {userauth.loggedin ? (
              <div
                onClick={() => handlelogout()}
                className=" hover:underline hover:underline-offset-2 text-white  transition font-semibold px-4 py-3 "
              >
                Logout
              </div>
            ) : (
              <>
                <div
                  onClick={() => loginmodal.onOpen()}
                  className=" hover:underline hover:underline-offset-2 text-white  transition font-semibold px-4 py-3 "
                >
                  Login
                </div>
                <div
                  onClick={() => registermodal.onOpen()}
                  className=" hover:underline hover:underline-offset-2 text-white transition font-semibold px-4 py-3 "
                >
                  Sign Up
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
