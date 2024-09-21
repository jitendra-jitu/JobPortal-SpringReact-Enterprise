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
      await axios.post('http://localhost:8080/jobPosts', form);
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
