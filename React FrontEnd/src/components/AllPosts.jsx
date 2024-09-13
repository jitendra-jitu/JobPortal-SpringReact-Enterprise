// import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import create from '@mui/icons-material/Create'
// import {
//     Card,
//     Grid,
//     Typography,
//   } from "@mui/material";
//   import axios from "axios";
//   import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const Search = () => {
//     const [post, setPost] = useState(null);
//     const navigate = useNavigate();

// const handleEdit = (id) => {
//   navigate("/edit",{state:{id}});
// }

//     useEffect(() => {
//         const fetchInitialPosts = async () => {
//             const response = await axios.get(`http://localhost:8080/jobPosts`);
//             response.data+=create.data
//             setPost(response.data);
//         }
//          fetchInitialPosts();
//       }, []);

//       const handleDelete = (id) => {
//         async function deletePost() {
//           await axios.delete(`http://localhost:8080/jobPost/${id}`);
//           console.log("Delete")
//       }
//       deletePost();
//       window.location.reload();
//       }

//   return (
//     <>
//       <Grid container spacing={2} sx={{ margin: "2%" }}>
//       <Grid item xs={12} sx={12} md={12} lg={12}>
//       </Grid>
//       {post &&
//         post.map((p) => {
//           return (
//             <Grid key={p.id} item xs={12} md={6} lg={4}>
//               <Card sx={{ padding: "3%", overflow: "hidden", width: "84%", backgroundColor:"#ADD8E6" }}>
//                 <Typography        
//                   variant="h5"
//                   sx={{ fontSize: "2rem", fontWeight: "600", fontFamily:"sans-serif" }}
//                 >
//              {p.postProfile}
//                 </Typography>
//                 <Typography  sx={{ color: "#585858", marginTop:"2%", fontFamily:"cursive" }} variant="body" >
//                   Description: {p.postDesc}
//                 </Typography>
//                 <br />
//                 <br />
//                 <Typography variant="h6" sx={{ fontFamily:"unset", fontSize:"400"}}>
//                   Experience: {p.reqExperience} years
//                 </Typography>
//                 <Typography sx={{fontFamily:"serif",fontSize:"400"}} gutterBottom  variant="body">Skills : </Typography>
//                 {p.postTechStack.map((s, i) => {
//                   return (
//                     <Typography variant="body" gutterBottom key={i}>
//                       {s} .
//                       {` `}
//                     </Typography>
//                   );
//                 })}
//                <DeleteIcon onClick={() => handleDelete(p.postId)} />
//                 <EditIcon onClick={() => handleEdit(p.postId)} />
//               </Card>
//             </Grid>
//           );
//         })}
//     </Grid>
//     </>
 
//   )
// }

// export default Search



import React, { useEffect, useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobPosts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
      setPosts(posts.filter((post) => post.postId !== id)); // Update state after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Grid key={post.postId} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", backgroundColor: "#ADD8E6" }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {post.postProfile}
              </Typography>
              <Typography sx={{ marginTop: "2%" }}>Description: {post.postDesc}</Typography>
              <Typography>Experience: {post.reqExperience} years</Typography>
              <Typography>Skills: {post.postTechStack.join(", ")}</Typography>
              <DeleteIcon onClick={() => handleDelete(post.postId)} />
              <EditIcon onClick={() => handleEdit(post.postId)} />
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>No job posts available.</Typography>
      )}
    </Grid>
  );
};

export default AllPosts;
