import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { Tour } from "../model/Tour";
import axios from "axios";
import "./FormCreate.css"

export default function FormCreate() {
    const navigate = useNavigate();

    const save = (tour) => {
        axios
            .post("http://localhost:8080/api/tours", tour)
            .then((res) => {
                console.log("Tour saved successfully:", res.data);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error saving tour:", error);
            });
    };

    const handleSubmit = (values) => {
        save(new Tour(values.id, values.name, values.price, values.description));
        navigate("/");
    };

    return (
        <>
            <Formik
                initialValues={{
                    id: "",
                    name: "",
                    price: 0,
                    description: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
            >
                {() => (
                    <Form>
                        <h1>Thêm tour</h1>
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
                            <button type="submit" className={"btn btn-submit"}>Thêm mới</button>
                            <button className={"btn btn-cancel"}>Huỷ</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
