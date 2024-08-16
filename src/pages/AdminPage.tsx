
import { Link } from "react-router-dom";
const AdminPage = () => {
    return <div className="w-full h-full flex items-center justify-center gap-10 flex-col">
        <button className="text-3xl text-gray-600 px-8 py-2 rounded-xl border border-gray-300 bg-gray-100"><Link to="/ids">Go to Log Page</Link></button>
        <button className="text-3xl text-gray-600 px-8 py-2 rounded-xl border border-gray-300 bg-gray-100"><Link to="/status">Instances&Survey Status</Link></button>
    </div>
};

export default AdminPage;