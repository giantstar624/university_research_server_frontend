import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const InstancesPage = () => {
    const [cnt, setCnt] = useState(0);
    const [total, setTotal] = useState(0);
    const [inResearch, setInResearch] = useState(0);
    const [noResponse, setNoResponse] = useState(0);
    useEffect(() => {
        try {
            axios.get(`${backendUrl}/status`)
                .then((result: any) => {
                    setTotal(result.data.total);
                    setInResearch(result.data.inResearch);
                    setNoResponse(result.data.noResponse);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <div>Instances running: {inResearch} in research, {noResponse} no response / Total {total}</div>
        <button onClick={() => {
            axios.get(`${backendUrl}/create_instance`, { params: { cnt } })
                .then((result: any) => {
                    if (result.data.success) alert("Created successfully");
                    else alert("Failed to create");
                });
        }}>Create instance</button>
        <input type="number" onChange={e => setCnt(parseInt(e.target.value))} />
    </div>
};

export default InstancesPage;