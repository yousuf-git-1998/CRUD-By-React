import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "console";
import { useNavigate, useParams } from "react-router-dom";


const CreateNewCategory = () => {

  const {id}= useParams();
  const navigate=useNavigate();
  const [initialValues, setInitialValues] = useState( {
    name: "",
    products: [
      {
        name: "",
        productNumber: "",
        color: "",
        standardCost: 0,
        listPrice:0,
        size: 0,
        weight: 0,
      },
    ],
  });
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    products: Yup.array().of(
      Yup.object({
        name: Yup.string().required(),
        productNumber: Yup.string().required(),
        color: Yup.string().required(),
        standardCost: Yup.number().required(),
        listPrice: Yup.number().required(),
        size: Yup.number().required(),
        weight: Yup.number().required(),
      })
    ),
  });
  
  const handleSubmit = async (values: any,{setSubmitting,resetForm}:any) => {
    if (id){
      await axios.put(`http://localhost:5289/ProductCategories/${id}`,values)
      resetForm();
      setSubmitting(false);
      alert("data Updated");
      navigate('/category-list')
    }
    else{
      await axios.post('http://localhost:5289/ProductCategories',values)
      resetForm();
      setSubmitting(false);
      alert("data saved")
    }
  
  }
  useEffect(()=>{
    if(id){
      axios.get(`http://localhost:5289/ProductCategories/${id}`).then(response=>{
        setInitialValues(response.data)
      })
  
    }
  },[id])


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="name">Category Name</label>
              <Field name="name" type="text" />
              <ErrorMessage
                name="name"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <h2>Add Products</h2>
              <FieldArray name="products">
                {({ push, remove }) => (
                    
                  <div>
                    {values.products.map((_, index) => (
                        
                      <div>
                       
                        <div>
                        <label htmlFor={`products.${index}.name`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.name`} />
                        <ErrorMessage
                          name={`products.${index}.name`}
                          className="text-danger"
                        />
                        </div>
                       <div>
                       <label htmlFor={`products.${index}.productNumber`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.productNumber`} />
                        <ErrorMessage
                          name={`products.${index}.productNumber`}
                          className="text-danger"
                        />
                       </div>

                       <div>
                       <label htmlFor={`products.${index}.color`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.color`} />
                        <ErrorMessage
                          name={`products.${index}.color`}
                          className="text-danger"
                        />
                       </div>

                       <div>
                       <label htmlFor={`products.${index}.standardCost`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.standardCost`} />
                        <ErrorMessage
                          name={`products.${index}.standardCost`}
                          className="text-danger"
                        />
                       </div>
                       <div>
                       <label htmlFor={`products.${index}.listPrice`}>
                          List Price
                        </label>
                        <Field name={`products.${index}.listPrice`} />
                        <ErrorMessage
                          name={`products.${index}.listPrice`}
                          className="text-danger"
                        />
                       </div>
                       <div>
                       <label htmlFor={`products.${index}.size`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.size`} />
                        <ErrorMessage
                          name={`products.${index}.size`}
                          className="text-danger"
                        />
                       </div>
                       <div>
                       <label htmlFor={`products.${index}.weight`}>
                          Product Name
                        </label>
                        <Field name={`products.${index}.weight`} />
                        <ErrorMessage
                          name={`products.${index}.weight`}
                          className="text-danger"
                        />
                       </div>
                       <button type="button" onClick={()=>remove(index)}>remove</button>
                       
                      </div>
                    ))}
                    <button type="button" onClick={()=>push({
                        name:'',
                        productNumber:'',
                        color: '',
                        standardCost:0,
                       listPrice:0,
                        size: 0,
                        weight:0
                       })}>Add</button>
                  </div>
                  
                )}
              </FieldArray>
            </div>

            <button type="submit">{id ? "Update": "Create"}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default CreateNewCategory;
