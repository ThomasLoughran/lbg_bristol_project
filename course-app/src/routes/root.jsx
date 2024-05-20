import { Outlet } from "react-router";

export default function Root() {
    return (
        <>
            <div>IOU a sidebar</div>
            <Outlet />
        </>
    )
}