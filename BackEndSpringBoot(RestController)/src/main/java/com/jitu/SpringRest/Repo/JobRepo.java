package com.jitu.SpringRest.Repo;

import com.jitu.SpringRest.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Repository
public class JobRepo {


    List<JobPost> jobs = Arrays.asList(
            new JobPost(1, "Java Developer", "Must have good experience in core Java and advanced Java", 2,
                    List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")),
            new JobPost(2, "Frontend Developer", "Experience in building responsive web applications using React",
                    3, List.of("HTML", "CSS", "JavaScript", "React")),
            new JobPost(3, "Data Scientist", "Strong background in machine learning and data analysis", 4,
                    List.of("Python", "Machine Learning", "Data Analysis")),
            new JobPost(4, "Network Engineer", "Design and implement computer networks for efficient data communication", 5,
                    List.of("Networking", "Cisco", "Routing", "Switching")),
            new JobPost(5, "Mobile App Developer", "Experience in mobile app development for iOS and Android",
                    3, List.of("iOS Development", "Android Development", "Mobile App")),
            new JobPost(6, "DevOps Engineer", "Experience with CI/CD pipelines and cloud infrastructure", 2,
                    List.of("AWS", "Azure", "Docker", "Kubernetes")),
            new JobPost(7, "UI/UX Designer", "Design user-friendly and visually appealing interfaces", 1,
                    List.of("Figma", "Sketch", "Adobe XD", "UX Research")),
            new JobPost(8, "Full Stack Developer", "Proficient in both frontend and backend technologies", 4,
                    List.of("Java", "JavaScript", "Node.js", "React", "Spring Boot")),
            new JobPost(9, "Business Analyst", "Analyze business requirements and translate them into technical solutions", 3,
                    List.of("SQL", "Data Analysis", "Business Process Modeling")),
            new JobPost(10, "Software Tester", "Test software applications for bugs and defects", 2,
                    List.of("Selenium", "JUnit", "TestNG", "Agile")),
            new JobPost(11, "Cloud Architect", "Design and implement cloud-based solutions", 5,
                    List.of("AWS", "Azure", "GCP", "Cloud Computing")),
            new JobPost(12, "Security Engineer", "Protect computer systems and networks from cyber threats", 4,
                    List.of("Cybersecurity", "Penetration Testing", "Networking", "Firewalls")),
            new JobPost(13, "AI/ML Engineer", "Develop and deploy machine learning models", 3,
                    List.of("Python", "TensorFlow", "PyTorch", "Machine Learning")),
            new JobPost(14, "Product Manager", "Define and manage the product roadmap", 5,
                    List.of("Product Strategy", "Agile", "Market Research", "User  Research")),
            new JobPost(15, "Scrum Master", "Facilitate agile development teams", 2,
                    List.of("Agile", "Scrum", "Kanban", "Project Management")),
            new JobPost(16, "Data Engineer", "Design and build data pipelines", 4,
                    List.of("SQL", "Python", "Spark", "Hadoop")),
            new JobPost(17, "Blockchain Developer", "Develop and deploy blockchain applications", 3,
                    List.of("Blockchain", "Solidity", "Ethereum", "Cryptography")),
            new JobPost(18, "Game Developer", "Develop and design video games", 3,
                    List.of("Game Development", "Unity", "Unreal Engine", "C#")),
            new JobPost(19, "AR/VR Developer", "Develop augmented and virtual reality applications", 2,
                    List.of("AR", "VR", "Unity", "Unreal Engine")),
            new JobPost(20, "Embedded Systems Engineer", "Develop software for embedded systems", 4,
                    List.of("C", "C++", "Microcontrollers", "Embedded Systems")),
            new JobPost(21, "Robotics Engineer", "Design and build robots", 5,
                    List.of("Robotics", "AI", "Control Systems", "Mechatronics")),
            new JobPost(22, "Sales Engineer", "Sell and support technical products", 3,
                    List.of("Sales", "Technical Support", "Customer Relations")),
            new JobPost(23, "Technical Writer", "Create technical documentation", 2,
                    List.of("Technical Writing", "Documentation", "Software Development")),
            new JobPost(24, "Project Manager", "Plan and execute projects", 4,
                    List.of("Project Management", "Agile", "PMP", "Risk Management")),
            new JobPost(25, "UX Researcher", "Conduct user research to improve user experience", 2,
                    List.of("UX Research", "User  Interviews", "Usability Testing", "Data Analysis")),
            new JobPost(26, "QA Analyst", "Test software quality and ensure it meets requirements", 1,
                    List.of("Testing", "QA", "Quality Assurance")),
            new JobPost(27, "Digital Marketing Specialist", "Plan and execute digital marketing campaigns", 2,
                    List.of("Digital Marketing", "SEO", "SEM", "Social Media Marketing")),
            new JobPost(28, "Graphic Designer", "Create visual content for various media", 1,
                    List.of("Graphic Design", "Adobe Photoshop", "Adobe Illustrator", "Design")),
            new JobPost(29, "Content Writer", "Create high-quality written content", 1,
                    List.of("Content Writing", "Copywriting", "SEO Writing")),
            new JobPost(30, "IT Support Specialist", "Provide technical support to end-users", 1,
                    List.of("IT Support", "Troubleshooting", "Help Desk")),
            new JobPost(31, "SEO Specialist", "Optimize website content for search engines", 3,
                    List.of("SEO", "Keyword Research", "Analytics")),
            new JobPost(32, "Database Administrator", "Manage and maintain database systems", 4,
                    List.of("SQL", "Database Management", "Performance Tuning")),
            new JobPost(33, "Network Security Specialist", "Ensure the security of network systems", 5,
                    List.of("Firewalls", "Intrusion Detection", "Network Security")),
            new JobPost(34, "System Administrator", "Manage and maintain IT systems and servers", 3,
                    List.of("Linux", "Windows Server", "Networking")),
            new JobPost(35, "Cloud Engineer", "Build and manage cloud infrastructure", 4,
                    List.of("AWS", "Azure", "Cloud Architecture")),
            new JobPost(36, "E-commerce Specialist", "Manage online sales platforms", 3,
                    List.of("E-commerce", "Digital Marketing", "Customer Experience")),
            new JobPost(37, "Mobile Game Developer", "Develop mobile games for iOS and Android", 3,
                    List.of("Unity", "C#", "Game Development")),
            new JobPost(38, "Data Analyst", "Analyze data to provide insights and recommendations", 2,
                    List.of("Excel", "SQL", "Data Visualization")),
            new JobPost(39, "Web Designer", "Design and create visually appealing websites", 2,
                    List.of("HTML", "CSS", "JavaScript")),
            new JobPost(40, "Content Strategist", "Develop content strategies to engage audiences", 3,
                    List.of("Content Marketing", "SEO", "Analytics")),
            new JobPost(41, "Social Media Manager", "Manage social media accounts and campaigns", 2,
                    List.of("Social Media", "Content Creation", "Analytics")),
            new JobPost(42, "IT Project Coordinator", "Assist in managing IT projects", 2,
                    List.of("Project Management", "Agile", "Communication")),
            new JobPost(43, "Business Intelligence Analyst", "Analyze data to support business decisions", 4,
                    List.of("SQL", "Data Visualization", "BI Tools")),
            new JobPost(44, "Game Designer", "Design game mechanics and user experiences", 3,
                    List.of("Game Design", "Storyboarding", "Prototyping")),
            new JobPost(45, "Hardware Engineer", "Design and develop computer hardware", 4,
                    List.of("Circuit Design", "Embedded Systems", "Prototyping")),
            new JobPost(46, "Telecommunications Engineer", "Design and implement communication systems", 5,
                    List.of("Telecommunications", "Networking", "Signal Processing")),
            new JobPost(47, "Artificial Intelligence Researcher", "Conduct research in AI and machine learning", 4,
                    List.of("Machine Learning", "Research", "Data Analysis")),
            new JobPost(48, "Virtual Reality Designer", "Create immersive virtual reality experiences", 3,
                    List.of("VR", "3D Modeling", "Unity")),
            new JobPost(49, "IT Compliance Specialist", "Ensure IT systems comply with regulations", 4,
                    List.of("Compliance", "Risk Management", "Auditing")),
            new JobPost(50, "Customer Success Manager", "Ensure customer satisfaction and retention", 3,
                    List.of("Customer Relations", "Account Management", "Communication"))
    );


    public List<JobPost> getAllJobs(){
        return jobs;
    }

    public void addjob(JobPost jobPost){
        jobs.add(jobPost);
        System.out.println(jobs);
    }

//    public JobPost getjob(int postid) {
//        return jobs.get(postid-1);
//    }


        public JobPost getjob(int postid) {
            for(JobPost job:jobs){
                if(job.getPostId()==postid){
                    return job;
                }
            }
            return null;
        }


    public void update(JobPost jobPost) {
        for(JobPost job:jobs){
            if(job.getPostId()==jobPost.getPostId()){
                job.setPostDesc(jobPost.getPostDesc());
                job.setPostProfile(jobPost.getPostProfile());
                job.setReqExperience(jobPost.getReqExperience());
                job.setPostTechStack(jobPost.getPostTechStack());
            }
        }
    }

    public void delete(int postid) {
        for(JobPost job:jobs){
           if(job.getPostId()==postid){
               jobs.remove(job);
           }
        }
//        jobs.removeIf(job -> job.getPostId() == postid);
    }
}
