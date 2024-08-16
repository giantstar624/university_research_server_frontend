import InstancesPage from "../pages/instances";
import IdPage from "../pages/IdPage";
import InvitePage from "../pages/InvitePage";
import LogPage from "../pages/LogPage";
import AdminPage from "../pages/AdminPage";

const routes = [
    {
        path: "/",
        element: <InvitePage />
    },
    {
        path: "log/:id",
        element: <LogPage />
    },
    {
        path: "ids",
        element: <IdPage />
    },
    {
        path: "status",
        element: <InstancesPage />
    },
    {
        path: "admin",
        element: <AdminPage />
    }
];

export default routes;