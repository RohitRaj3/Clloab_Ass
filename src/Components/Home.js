import React, { useState } from 'react';
import styles from './Home.module.css'; 

const Home = (props) => {
  const { names } = props;
  const [firstIndex, setfirst] = useState(0);
  const [fade, setFade] = useState(false);

  const handleButtonClick = () => {
    setfirst((firstIndex + 1) % names.length);
    setFade(true);

    //css assisgnments
    setTimeout(() => {
      setFade(false);
    }, 1000); // delay of  1 sec
  };

  const currentName = names[firstIndex];

  return (
    <div className={styles['center-both']}>
    {/* here passing css moduleas an object */}
      <h1 className={fade ? `${styles['fade-in']} ${styles['center-both']}` : ''}> 
        {currentName}
      </h1>
      <button onClick={handleButtonClick}>Next</button>
      <ul>
      {/* this will display the list of names */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
