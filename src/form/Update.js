import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import FormUpdate from "./FormUpdate";

export default function Update() {
    const [tour, setTour] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTour(res.data)
        })
    }, [id])

    return (
        <>
            <FormUpdate tour={tour} naviage={navigate}/>
        </>
    )
}