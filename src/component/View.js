import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Detail() {
    const [tour, setTour] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTour(res.data)
        })
    }, [id])

    return (
        <>
            <div>
                <h1>Xem tour</h1>
                <hr/>
                {
                    <div>
                        <div>
                            <div>
                                <h4>Tên tour :{tour.name}</h4>
                                <br/>
                            </div>
                        </div>
                        <p>Giá : {tour.price} </p>
                        <p>Mô tả : {tour.description}</p>

                    </div>

                }
                <div className={"row"}>

                    <div className={"col-lg-6"}>
                        <Link to={"/"} className={"btn btn-info"}>List</Link>
                    </div>
                </div>
            </div>

        </>
    )
}