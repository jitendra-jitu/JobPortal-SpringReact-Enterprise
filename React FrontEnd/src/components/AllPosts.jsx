

import React, { useEffect, useState } from "react";
import { Card, Grid, Typography, Box, IconButton } from "@mui/material";
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
    <Box sx={{ padding: "2%" }}>
      <Grid container spacing={3}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Grid key={post.postId} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  padding: "15px",
                  width: "90%", // Set card width to 90% of the container
                  backgroundColor: "#add8e6",
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  height: "auto", // Allow card height to adjust based on content
                  position: "relative", // Required for positioning buttons
                  overflow: "auto", // Allow content to overflow if necessary
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#000000", fontSize: "25px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  {post.postProfile}
                </Typography>
                <Typography sx={{ mt: 1, fontWeight: 600, color: "#000000", fontSize: "16px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  Description:
                </Typography>
                <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "14px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  {post.postDesc}
                </Typography>
                <Typography sx={{ fontWeight: 600, color: "#000000", fontSize: "16px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  Experience:
                </Typography>
                <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "14px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  {post.reqExperience} years
                </Typography>
                <Typography sx={{ fontWeight: 600, color: "#000000", fontSize: "16px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  Skills:
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "14px", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                  {post.postTechStack.join(", ")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute", // Position buttons absolutely within the card
                    bottom: "15px", // Keep buttons 15px from the bottom of the card
                    left: "15px", // Space from left of the card
                    right: "15px", // Space from right of the card
                  }}
                >
                  <IconButton onClick={() => handleEdit(post.postId)} sx={{ mr: 1 }}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(post.postId)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ mt: 5, width: "100%", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
            No job posts available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default AllPosts;
