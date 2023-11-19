import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";     
import { db} from '../fire_base';
import { collection,addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";
const SignInSchema = Yup.object().shape({
  Name: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Name is required"),

phoneNumber: Yup.string()
  .required("Phone number is required")
  .matches(
/\d/,"Invalid Number"
  ),
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });
const initialValues = {
    Name:"",
    phoneNumber:"",
    email: "",
    password: "",
    images:null
};
function AdmissionEnquiry() {
  const[image,setImage] = useState(null)
  const storage = getStorage();
const storageRef = ref(storage, 'gs://form-67209.appspot.com/Image');
uploadBytes(storageRef, Image).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
  return (
      <div className='pl-80 bg-[#a7a7a7] pt-20'>       
          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              console.log(values);
              console.log(image);
              const docRef = addDoc(collection(db,"admission"),{
                Name: values.Name,
                email: values.email,
                phoneNumber: values.phoneNumber,
                password: values.password,
                
              })
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <Card color="transparent" shadow={false}>
                <Typography variant="h2" color="black" className='text-xl text-[#000000] font-extrabold'>
                     ADMISSION ENQUIRY
                  </Typography>
                  <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="form-row mb-3 flex flex-col gap-2">
                      <label htmlFor="Name" className='text-black 
                      '>Name</label>
                      <Field
                        type="Name"
                        name="Name"
                        id="Name"
                        class="p-2 rounded-lg drop-shadow-lg"
                        placeholder="Name"
                        className={errors.Name && touched.Name ? 
                        "input-error" : null}
                      />
                      <ErrorMessage name="Name" component="span" className="error" />
                    </div>
                    <div className="form-row mb-3 flex flex-col gap-2">
                      <label htmlFor="phoneNumber" className='text-black'>Phone Number</label>
                      <Field
                        type="phoneNumber"
                        name="phoneNumber"
                        id="phoneNumber"
                        class="p-2 rounded-lg drop-shadow-lg"
                        placeholder="Phone number"
                        className={errors.phoneNumber && touched.phoneNumber ? 
                        "input-error" : null}
                      />
                      <ErrorMessage name="phoneNumber" component="span" className="error" />
                    </div>
                    <div className="form-row mb-3 flex flex-col gap-2">
                      <label htmlFor="email" className='text-black'>Email</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        class="p-2 rounded-lg drop-shadow-lg"
                        className={errors.email && touched.email ? 
                        "input-error" : null}
                      />
                      <ErrorMessage name="email" component="span" className="error" />
                    </div>
      
                    <div className="form-row mb-3 flex flex-col gap-2">
                      <label htmlFor="password" className='text-black'>Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        class="p-2 rounded-lg drop-shadow-lg"
                        className={errors.password && touched.password ? 
                        "input-error" : null}
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="flex w-72 flex-col gap-6 my-8">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                      </Typography>
                      <select className="p-2 rounded-md drop-shadow-lg" name="program" id="program">
                        <option value="">--Select program--</option>
                        <option value="ug">UG</option>
                        <option value="pg">PG</option>
                      </select>
                    </div>
                    <div className="flex w-72 flex-col gap-6 my-8">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                      </Typography>
                      <select className="p-2 rounded-md drop-shadow-lg" name="program" id="program">
                        <option value="">--Select Course--</option>
                      </select>
                    </div>
                    <div className="flex w-72 flex-col gap-6 my-8">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                      </Typography>
                      <select className="p-2 rounded-md drop-shadow-lg" name="program" id="program">
                        <option value="">--Select Country--</option>
                        <option value="ug">India</option>
                        <option value="pg">Australia</option>
                        <option value="pg">USA</option>
                      </select>
                    </div>
                    <div className="flex w-72 flex-col gap-6 my-8">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                      </Typography>
                      <select className="p-2 rounded-md drop-shadow-lg" name="program" id="program">
                        <option value="">--Select State--</option>
                        <option value="">Karnataka</option>
                        <option value="">Maharashtra</option>
                        <option value="">Kerala</option>
                        <option value="">Tamil Nadu</option>
                      </select>
                    </div>
                    <div className="flex w-72 flex-col gap-6 my-8">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                      </Typography>
                      <select className="p-2 rounded-md drop-shadow-lg" name="program" id="program">
                        <option value="">--Select City--</option>
                      </select>
                    </div>
                    <div className="w-98 h-98">
                      <Textarea label="Message" />
                     </div>
                     <div className="form-row mb-3 flex flex-col gap-2">
                      <label htmlFor="images" className='text-black'>Upload Image</label>
                      <input
                        type="file"
                        accept='image/*'
                        onChange={(e)=>{
                          setImage(e.target.files[0])
                        }}
                        name="images"
                        id="images"
                        class="p-2 rounded-lg drop-shadow-lg"
                        placeholder="images"
                        className={errors.images && touched.images ? 
                        "input-error" : null}
                      />
                      <ErrorMessage name="images" component="span" className="error" />
                    </div>
                    <button
                      type="submit"
                      className={!(dirty && isValid) ? "disabled-btn" : ""}
                      disabled={!(dirty && isValid)}
                      class="ml-24 bg-[#5cb85c] mt-6 text-white p-3 w-40 rounded-md" fullWidth >
                      Submit
                    </button>
                  </Form>
                 </Card>
              );
            }}
          </Formik>
          </div>
  )
}

export default AdmissionEnquiry