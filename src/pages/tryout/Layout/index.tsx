import { Row, Flex, Typography } from "antd";
import Login from "../Login";
import Register from "../Register";
import "./index.scss";
import { atom, useAtom } from "jotai";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Upload from "../graph/Upload";

interface LoginState {
  account: string | undefined;
  password: string | undefined;
}

export interface LoginContextType {
  loginState: LoginState;
  setLoginState: (state: LoginState) => void;
}

const loginAtom = atom<LoginState>({ account: undefined, password: undefined });

const Tryout: React.FC = () => {
  const location = useLocation();
  const [loginState, setLoginState] = useAtom(loginAtom);
  return (
    <>
      <div className="background">
        <Outlet />
      </div>
    </>
  );
};

export default Tryout;
