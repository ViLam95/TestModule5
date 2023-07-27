import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css"

export default function Home() {
    const [tours, setTours] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/tours')
            .then((res) => {
                setTours(res.data)
            })
    }, [])

    const handleDeleteTour = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/api/tours/${id}`)
                    .then((res) => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log("Error deleting student:", error);
                    });
            }
        });
    };

    return (
        <>
            <div>
                <nav className={"navbar"}>
                    <ul>
                        <li>
                            <Link to="/create" className={"btn btn-info"}>Thêm</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={"content"}>
                <table className={"tour-table"}>
                    <thead style={{textAlign:"center"}}>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tours.map((tour) =>(
                        <tr key={tour.id}>
                            <td>{tour.id}</td>
                            <td>{tour.name}</td>
                            <td>{tour.price}</td>
                            <td>
                                <Link to={`/view/${tour.id}`} className={`btn btn-info`}>View</Link>
                            </td>
                            <td><Link to={`/update/${tour.id}`} className={"btn btn-info"}>Update</Link></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDeleteTour(tour.id)}>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}