import React, { useEffect, useState } from 'react';
import '../css/Page.css'; // Import the CSS file for styling

const Skills = () => {
  // Array of skills with their names and logo paths
  const skillsData = [
    { name: 'JavaScript', logo: '/images/javascript.png' },
    { name: 'React', logo: '/images/react.png' },
    { name: 'HTML', logo: '/images/html.png' },
    { name: 'CSS', logo: '/images/css.png' },
    { name: 'Node.js', logo: '/images/nodejs.png' },
    { name: 'Git', logo: '/images/git.png' },
    { name: 'AWS', logo: '/images/aws.png' },
    { name: 'MongoDB', logo: '/images/mongodb.png' },
    { name: 'Docker', logo: '/images/docker.png' },
    { name: 'Kotlin', logo: '/images/kotlin.png' },
  ];

  // State to store the shuffled skills
  const [shuffledSkills, setShuffledSkills] = useState([]);

  // Function to shuffle the skills array
  const shuffleSkills = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Shuffle the skills array on component mount
  useEffect(() => {
    setShuffledSkills(shuffleSkills([...skillsData]));
  }, []);

  return (
    <section id="skills" className="skills-container">
      <h2>Web Development Skills</h2>
      <div className="skills-grid">
        {shuffledSkills.map((skill, index) => (
          <div className="skill-block" key={index}>
            {skill.name}
            <br />
            <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;