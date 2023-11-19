import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Log({ type }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        Admissionno:'',
      });
const[spassword,setspassword] = useState("password")
    
      const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? e.target.checked : value;
        
    
        setFormData({
          ...formData,
          [name]: newValue,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    const [activeTab, setActiveTab] = React.useState("Faculty Login");
    const data = [
      {
        label: "Faculty Login",
        value: "Faculty Login",
        desc:  
        <div className="pt-24   ml-40 mr-40">
          
        <Card className="w-96 drop-shadow-lg">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <h5 className='place-items-left'>{activeTab}</h5>
            <Typography variant="h3" color="white">
              SAHYADRI
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 mt-4 mb-4">
            <Input
              label="User name"
              size="lg"
              name="email"
              
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              size="lg"
              type={spassword}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="-ml-2.5">
              <Checkbox
                label="Show Password"
                name="Show Password"
                onChange={() => {
                    if(spassword === "password"){
                        setspassword("text")
                    }else if(spassword === "text"){
                        setspassword("password")
                    }
                }
                }
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSubmit}  color='blue'  className=' rounded-3xl drop-shadow-sm'>
              Log In
            </Button>
          </CardFooter>
        </Card>
      </div>,
      },
      {
        label: "Student Login",
        value: "Student Login",
        desc: <div className=" pt-24  ml-40 mr-40">
        <Card className="w-96 drop-shadow-lg">
          <CardHeader
            variant="gradient"
            color="red"
            className="mb-4 grid h-28 place-items-center"
          >
            <h5 className='place-items-left'>{type === 'faculty' ? 'Faculty Login' : 'Student Login'}</h5>
            <Typography variant="h3" color="white">
              SAHYADRI
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 rounded-lg mt-4 mb-4">
            <Input
              label="Admission No"
              size="lg"
              name="Admission No"
              value={formData.Admissionno}
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              size="lg"
              type={spassword}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="-ml-2.5">
              <Checkbox
                label="Show Password"
                name="Show Password"
                onChange={() => {
                    if(spassword === "password"){
                        setspassword("text")
                    }else if(spassword === "text"){
                        setspassword("password")
                    }
                }
                }
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color='red' className='rounded-3xl' fullWidth onClick={handleSubmit}>
              Log In
            </Button>
          </CardFooter>
        </Card>
      </div>,
      },
    ];
  return (
    <>
  <div className="bg-cover bg-center h-screen flex items-center  w-screen" style={{ backgroundImage: "url('../img/Sahyadri_College_of_Engineering_&_Management.jpg')" }}>
  <div className="pl-96 flex">
     <Tabs value={activeTab}>
     <TabsHeader
       className="rounded-none border-b border-blue-gray-800 bg-transparent p-0"
       indicatorProps={{
         className:
           "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
       }}
     >
       {data.map(({ label, value }) => (
         <Tab
           key={value}
           value={value}
           onClick={() => setActiveTab(value)}
           className={activeTab === value ? "text-gray-900" : ""}
         >
           {label}
         </Tab>
       ))}
     </TabsHeader>
     <TabsBody>
       {data.map(({ value, desc }) => (
         <TabPanel key={value} value={value}>
           {desc}
         </TabPanel>
       ))}
     </TabsBody>
   </Tabs>
   </div>
   </div>
   </>
  );
}
export default Log;
