import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import {ROUTES} from "./routeConstants"

export default function Auth() {

    const isLoggedIn = false

    if(isLoggedIn){
        return <Outlet/>
    } else {
        return (
            <Routes>
                <Route path="*" element={ <Navigate to={ROUTES.LOGIN} /> }/>
            </Routes>
        )
    }

}