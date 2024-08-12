import { useState } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CreateInstancePage = () => {
    const [cnt, setCnt] = useState(0);
    return <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <button onClick={() => {
            axios.get(`${backendUrl}/create_instance`, { params: { cnt } })
                .then((result: any) => {
                    if (result.success) alert("Created successfully");
                    else alert("Failed to create");
                });
        }}>Create instance</button>
        <input type="number" onChange={e => setCnt(parseInt(e.target.value))} />
    </div>
};

export default CreateInstancePage;