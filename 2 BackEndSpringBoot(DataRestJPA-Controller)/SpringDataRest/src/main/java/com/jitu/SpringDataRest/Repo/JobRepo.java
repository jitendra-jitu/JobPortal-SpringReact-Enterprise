package com.jitu.SpringDataRest.Repo;

import com.jitu.SpringDataRest.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface JobRepo extends JpaRepository<JobPost,Integer> {

//    List<JobPost> findByPostProfileContainingOrPostDescContaining(String jobProfile, String postDesc);


}



//it Automates the DataJPA queries at standard Paths


