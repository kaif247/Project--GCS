import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { stories } from '../data/facebookData';
import styles from '../components/Feed/StoriesSection.module.css';

function getStartIndexFromQuery(search) {
  const params = new URLSearchParams(search);
  const idx = parseInt(params.get('start'), 10);
  return isNaN(idx) ? 0 : Math.max(0, Math.min(idx, stories.length - 1));
}

const StoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(() => getStartIndexFromQuery(location.search));

  React.useEffect(() => {
    setCurrent(getStartIndexFromQuery(location.search));
    // eslint-disable-next-line
  }, [location.search]);

  const story = stories[current];

  const nextStory = () => setCurrent((c) => (c + 1) % stories.length);
  const prevStory = () => setCurrent((c) => (c - 1 + stories.length) % stories.length);

  if (!story) return null;

  return (
    <div className={styles.storyViewerOverlay}>
      <div className={styles.storyViewerContent}>
        <img src={story.image || story.userAvatar} alt={story.userName} className={styles.storyViewerImage} />
        <div className={styles.storyViewerUser}>{story.userName}</div>
        <button onClick={prevStory} className={styles.storyNavBtn} aria-label="Previous Story">&#8592;</button>
        <button onClick={nextStory} className={styles.storyNavBtn} aria-label="Next Story">&#8594;</button>
        <button onClick={() => navigate(-1)} className={styles.storyCloseBtn} aria-label="Close">&times;</button>
      </div>
    </div>
  );
};

export default StoriesPage;
