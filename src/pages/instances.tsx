import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const InstancesPage = () => {
    const [cnt, setCnt] = useState(0);
    const [total, setTotal] = useState(0);
    const [running, setRunning] = useState(0);
    useEffect(() => {
        try {
            axios.get(`${backendUrl}/status`, { params: { cnt } })
                .then((result: any) => {
                    setTotal(result.total);
                    setRunning(result.runnign);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <div>Instances running: {running}/{total}</div>
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

export default InstancesPage;