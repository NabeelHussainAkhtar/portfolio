import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { listTools } from '../../data';
import './IdentityCard.css';

const IdentityCard = ({ photoUrl, name, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="identity-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="identity-card"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="card-face card-front">
          <div className="card-overlay"></div>
          <div className="card-content">
            <div className="photo-container">
              <img src={photoUrl} alt="Profile" className="profile-photo" />
            </div>
            <div className="info-container">
              <h2 className="name">{name}</h2>
              <div className="title-box">
                <span className="title-word">Full Stack</span>
                <span className="title-word highlighted">Developer</span>
              </div>
            </div>
            <div className="tap-hint">Tap to see skills</div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face card-back">
          <div className="card-content">
            <h3 className="back-title">Core Technologies</h3>
            <div className="skills-grid">
              {listTools.slice(0, 12).map((tool) => (
                <div key={tool.id} className="skill-icon-box">
                  <img src={tool.image} alt={tool.name} className="skill-img" title={tool.name} />
                </div>
              ))}
            </div>
            <div className="tap-hint">Tap to go back</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IdentityCard;
