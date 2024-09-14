

import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialFormState = {
  postId: '',
  postProfile: '',
  reqExperience: 0,
  postTechStack: [],
  postDesc: '',
};

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialFormState);
  const [skillSet, setSkillSet] = useState(['Javascript', 'Java', 'Python', 'Django', 'Rust']);
  const id = location.state?.id; // Assuming ID is passed in location.state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobPost/${id}`);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prevForm) => ({
        ...prevForm,
        postTechStack: checked
          ? [...prevForm.postTechStack, value]
          : prevForm.postTechStack.filter((skill) => skill !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/jobPost/${form.postId}`, form); // Update job post with the given id
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <Paper sx={{ padding: '2%', maxWidth: '600px', margin: 'auto' }} elevation={3}>
      <Typography align="center" variant="h5" sx={{ marginBottom: '20px' }}>
        Edit Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            type="number"
            name="postId"
            label="Post ID"
            value={form.postId}
            disabled
            sx={{ width: '100%', marginBottom: '20px' }}
          />
          <TextField
            type="text"
            name="postProfile"
            label="Job Profile"
            value={form.postProfile}
            onChange={handleChange}
            required
            sx={{ width: '100%', marginBottom: '20px' }}
          />
          <TextField
            type="number"
            name="reqExperience"
            label="Years of Experience"
            value={form.reqExperience}
            onChange={handleChange}
            required
            sx={{ width: '100%', marginBottom: '20px' }}
          />
          <TextField
            type="text"
            name="postDesc"
            label="Job Description"
            value={form.postDesc}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ width: '100%', marginBottom: '20px' }}
          />
          <Box sx={{ width: '100%', marginBottom: '20px' }}>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>Required Skills</Typography>
            <ul style={{ paddingLeft: '20px' }}>
              {skillSet.map((skill, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name="postTechStack"
                      value={skill}
                      checked={form.postTechStack.includes(skill)}
                      onChange={handleChange}
                    />
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: '100%' }}
          >
            Update
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Edit;
