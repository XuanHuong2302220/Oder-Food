import {path} from "../config"
import IntroPage from "../pages/IntroPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

export const publicRoutes = [
    {
        path: path.intro,
        element: <IntroPage />,
    },
    {
        path: path.login,
        element: <LoginPage />,
    },
    {
        path: path.register,
        element: <RegisterPage />
    }
]
