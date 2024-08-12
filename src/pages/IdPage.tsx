import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const IdPage = () => {
    const [ids, setIds] = useState<{ [key: string]: string[] }>({});
    useEffect(() => {
        try {
            axios.get(`${backendUrl}/ids`).then((data) => {
                setIds(data.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        {
            Object.entries(ids).map(([ip, ids]) => {
                return ids.map((id: string) => <div className="text-blue-600 underline text-3xl"><Link to={`/log/${ip}_${id}`} >{id}</Link></div>)
            })
        }
    </div>
};

export default IdPage;