import { Formik, Form, Field } from "formik";
import {useNavigate, useParams} from "react-router-dom";
import { Tour } from "../model/Tour";
import axios from "axios";
import "./FormCreate.css"

export default function FormCreate(props) {
    const {id} = useParams()
    const navigate = useNavigate();

    const save = (tour) => {
        axios
            .post(`http://localhost:8080/api/tours/${id}`, tour)
            .then((res) => {
                console.log("Tour saved successfully:", res.data);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error saving tour:", error);
            });
    };

    const handleSubmit = (values) => {
        axios
            .put(`http://localhost:8080/api/tours/${id}`, values)
            .then((res) => {
                console.log("Tour saved successfully:", res.data);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error saving tour:", error);
            });
    };

    return (
        <>
            <Formik
                initialValues={
                    props.tour
                }
                enableReinitialize={true}
                onSubmit={(values) => handleSubmit(values)}
            >
                {() => (
                    <Form>
                        <h1>Sửa tour</h1>
                        <div>
                            <label htmlFor="name">Tên tour</label>
                            <Field type="text" name="name" />
                        </div>

                        <div>
                            <label htmlFor="price">Giá</label>
                            <Field type="number" name="price" />
                        </div>

                        <div>
                            <label htmlFor="description">Mô tả</label>
                            <Field as="textarea" name="description" />
                        </div>

                        <div>
                            <button type="submit" className={"btn btn-submit"}>Sửa</button>
                            <button className={"btn btn-cancel"}>Huỷ</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
