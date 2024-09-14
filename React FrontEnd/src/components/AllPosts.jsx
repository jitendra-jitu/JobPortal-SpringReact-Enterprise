
import React, { useEffect, useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllPosts = ({ searchKeyword }) => {
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

  // Filter posts based on search keyword
  const filteredPosts = posts.filter((post) =>
    post.postProfile.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    post.postDesc.toLowerCase().includes(searchKeyword.toLowerCase())
  );

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
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
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