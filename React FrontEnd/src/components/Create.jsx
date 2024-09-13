// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// const initial = { postId:"",postProfile: "", reqExperience: 0, postTechStack: [], postDesc:"" };


// const Create = () => {
//   const skillSet = [
//     {
//       name: "Javascript"
//     },
//     {
//       name: "Java"
//     },
//     {
//       name: "Python"
//     },
//     {
//       name: "Django"
//     },
//     {
//       name: "Rust"
//     }
//   ];

//   const navigate = useNavigate();
//   const [form, setForm] = useState(initial);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/jobPost",form)
//       .then((resp) => {
//         console.log(resp.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const { postId, postProfile, reqExperience, postDesc } = form;

//   const handleChange = (e) => {
//     setForm({...form , postTechStack : [...form.postTechStack, e.target.value]});
//   }

  

//   return (
//     <Paper sx={{ padding:"1%"}} elevation={0}>
//       <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
//         Create New Post
//       </Typography>
//       <form autoComplete="off" noValidate onSubmit={handleSubmit}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}
//         >
//            <TextField
//             min="0"
//             type="number"
//             sx={{ width: "50%", margin: "2% auto" }}
            
//             onChange={(e) => setForm({ ...form, postId: e.target.value })}
//             label="Enter your Post ID"
//             variant="outlined"
//             value={postId}
//           />
//           <TextField
//             type="string"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
//             label="Job-Profile"
//             variant="outlined"
//             value={postProfile}
//           />
//           <TextField
//             min="0"
//             type="number"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
//             label="Years of Experience"
//             variant="outlined"
//             value={reqExperience}
//           />
//            <TextField
//             type="string"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             multiline
//             rows={4}
//             onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
//             label="Job-desc"
//             variant="outlined"
//             value={postDesc}
//           />
//           <Box sx={{ margin:"1% auto"}}>
//           <h3>Please mention required skills</h3>
//          <ul>
//         {skillSet.map(({ name }, index) => {
//           return (
//             <li key={index}>
//               <div >
//                 <div>
//                   <input
//                     type="checkbox"
//                     id={`custom-checkbox-${index}`}
//                     name={name}
//                     value={name}
//                     onChange={handleChange}  
//                   />
//                   <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
       
//       </ul>
//           </Box>
//           <Button
//             sx={{ width: "50%", margin: "2% auto" }}
//             variant="contained"
//             type="submit"
//             onClick={()=>navigate("/")}
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Paper>
//   );
// }

// export default Create










import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    postId: '',
    postProfile: '',
    reqExperience: 0,
    postTechStack: [],
    postDesc: '',
  });

  const skillSet = ['Javascript', 'Java', 'Python', 'Django', 'Rust'];

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.type === 'checkbox') {
      setForm((prevForm) => ({
        ...prevForm,
        postTechStack: e.target.checked
          ? [...prevForm.postTechStack, value]
          : prevForm.postTechStack.filter((skill) => skill !== value),
      }));
    } else {
      setForm({ ...form, [e.target.name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/jobPost', form);
      navigate('/'); // Navigate to home after submission
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Paper sx={{ padding: '1%' }} elevation={0}>
      <Typography align="center" variant="h5">
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            type="number"
            name="postId"
            onChange={handleChange}
            label="Post ID"
            value={form.postId}
            sx={{ width: '50%', margin: '2% auto' }}
          />
          <TextField
            type="string"
            name="postProfile"
            onChange={handleChange}
            label="Job Profile"
            value={form.postProfile}
            required
            sx={{ width: '50%', margin: '2% auto' }}
          />
          <TextField
            type="number"
            name="reqExperience"
            onChange={handleChange}
            label="Years of Experience"
            value={form.reqExperience}
            required
            sx={{ width: '50%', margin: '2% auto' }}
          />
          <TextField
            type="string"
            name="postDesc"
            onChange={handleChange}
            label="Job Description"
            value={form.postDesc}
            required
            multiline
            rows={4}
            sx={{ width: '50%', margin: '2% auto' }}
          />
          <Box>
            <Typography variant="body1">Required Skills</Typography>
            <ul>
              {skillSet.map((skill, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={handleChange}
                    />
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
          </Box>
          <Button variant="contained" type="submit" sx={{ width: '50%', margin: '2% auto' }}>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
