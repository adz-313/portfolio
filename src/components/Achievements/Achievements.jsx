import './Achievements.css';
import { achievementsData } from '../../data/achievementsData';

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <h2 className="section-title">{achievementsData.title}</h2>

        <div className="achieve-bento-grid">
          <div className="achieve-card achieve-bento-main glass-card hover-glow">
            <div className="bento-year">{achievementsData.items[0].year}</div>
            <h3 className="bento-title-large">{achievementsData.items[0].title}</h3>
            <div className="bento-org">{achievementsData.items[0].organization}</div>
            <p className="bento-desc">{achievementsData.items[0].description}</p>
          </div>

          <div className="achieve-stats-container">
            {achievementsData.stats.slice(0, 2).map((stat, index) => (
              <div key={index} className="achieve-card achieve-stat-card glass-card hover-glow">
                <div className="stat-number">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {achievementsData.items.slice(1, 3).map((item, index) => (
            <div key={item.id} className="achieve-card achieve-bento-medium glass-card hover-glow">
              <div className="bento-year">{item.year}</div>
              <h3 className="bento-title-medium">{item.title}</h3>
              <p className="bento-desc-small">{item.description}</p>
            </div>
          ))}

          <div className="achieve-card achieve-bento-wide glass-card hover-glow">
            <div className="wide-content-left">
              <div className="bento-year">{achievementsData.items[3].year}</div>
              <h3 className="bento-title-medium">{achievementsData.items[3].title}</h3>
              <p className="bento-desc-small">{achievementsData.items[3].description}</p>
            </div>
            <div className="wide-content-right">
              {achievementsData.stats.slice(2, 4).map((stat, index) => (
                <div key={index} className="mini-stat">
                  <div className="mini-stat-val">{stat.value}{stat.suffix}</div>
                  <div className="mini-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
