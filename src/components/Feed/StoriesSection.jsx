
import React from 'react';
import styles from './StoriesSection.module.css';
import { useNavigate } from 'react-router-dom';
import { stories } from '../../data/facebookData';


const StoriesSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.storiesSection}>
      {stories.map((story, idx) => (
        <div
          key={story.id}
          className={styles.storyCard}
          onClick={() => navigate(`/stories?start=${idx}`)}
          tabIndex={0}
          role="button"
          aria-label={`View story by ${story.userName}`}
        >
          <img src={story.image || story.userAvatar} alt={story.userName} className={styles.storyImage} />
          <span className={styles.user}>{story.userName}</span>
        </div>
      ))}
    </div>
  );
};

export default StoriesSection;
