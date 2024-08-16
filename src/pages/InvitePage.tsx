
import axios from "axios"
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const InvitePage = () => {
    const onClick = async () => {
        const result = (await axios.get(`${backendUrl}/launch`)).data;
        if (result.launched == true) {
            location.href = result.url;
        } else alert('All instaces are running. Wait a min');
    }
    return <div className="w-full h-full flex items-center justify-center relative">
        <div className="flex flex-col items-center gap-5">
            <a className="text-blue-500 text-3xl underline" onClick={onClick}>Participate to the study</a>
        </div>
    </div>
};

export default InvitePage;