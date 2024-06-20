import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hook"

const PrivateRouter = () => {
    const auth = useAuth()
    return auth ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRouter;

