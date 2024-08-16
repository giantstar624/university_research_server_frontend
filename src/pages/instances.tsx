import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const InstancesPage = () => {
    const [cnt, setCnt] = useState(0);
    const [total, setTotal] = useState(0);
    const [inResearch, setInResearch] = useState(0);
    const [noResponse, setNoResponse] = useState(0);

    const [endList, setEndList] = useState([]);
    useEffect(() => {
        try {
            axios.get(`${backendUrl}/status`)
                .then((result: any) => {
                    setTotal(result.data.total);
                    setInResearch(result.data.inResearch);
                    setNoResponse(result.data.noResponse);
                });
            axios.get(`${backendUrl}/endlist`).then((result: any) => {
                setEndList(result.data);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);
    return <div className="w-full h-full flex">
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <div>Total {total}</div>
            <div>{inResearch} In research</div>
            <div> {noResponse} Creating</div>
            <div> {total - inResearch - noResponse} free </div>
            <button className="bg-cyan-500 hover:bg-cyan-600" onClick={() => {
                axios.get(`${backendUrl}/create_instance`, { params: { cnt } })
                    .then((result: any) => {
                        if (result.data.success) alert("Created successfully");
                        else alert("Failed to create");
                    });
            }}>Create instance</button>
            <input type="number" style={{ border: "1px solid black" }} onChange={e => setCnt(parseInt(e.target.value))} />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <div>Total subject finished: {endList.length}</div>
            {endList.map(d => {
                return <div className="flex gap-2">
                    <div>Start Time: <b>{d.startTime}</b></div>
                    <div>End Time: <b>{d.endTime}</b></div>
                    <div>Duration: <b>{Math.round(d.duration / 1000)}</b></div>
                </div>
            })}
        </div>
    </div>
};

export default InstancesPage;