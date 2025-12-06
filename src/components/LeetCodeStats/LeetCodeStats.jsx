import React, { useState, useEffect } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = ({ username = 'vloggerbhaai' }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `{
              matchedUser(username: "${username}") {
                submitStats {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
              }
            }`,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('LeetCode API Response:', data);
        
        if (data.data && data.data.matchedUser) {
          const submissionStats = data.data.matchedUser.submitStats.acSubmissionNum;
          const statsObj = {};
          submissionStats.forEach((stat) => {
            statsObj[stat.difficulty] = stat.count;
          });
          console.log('Parsed stats:', statsObj);
          setStats(statsObj);
        } else {
          console.error('No matched user data:', data);
          setError('User not found');
          // Use fallback data for testing
          setStats({
            All: 111,
            Easy: 65,
            Medium: 45,
            Hard: 1
          });
        }
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError('Failed to fetch LeetCode stats');
        // Use fallback data if API fails (CORS issue)
        setStats({
          All: 111,
          Easy: 65,
          Medium: 45,
          Hard: 1
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  // Use fallback data if API fails or during loading
  const displayStats = stats || {
    All: 111,
    Easy: 65,
    Medium: 45,
    Hard: 1
  };

  if (loading && !stats) {
    return (
      <div className="leetcode-stats">
        <div className="leetcode-circle">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  const allCount = displayStats.All || 0;
  const easyCount = displayStats.Easy || 0;
  const mediumCount = displayStats.Medium || 0;
  const hardCount = displayStats.Hard || 0;

  console.log('Rendering with stats:', { allCount, easyCount, mediumCount, hardCount });

  // Calculate percentages for the circle segments
  const total = easyCount + mediumCount + hardCount;
  const easyPercent = total > 0 ? (easyCount / total) * 100 : 0;
  const mediumPercent = total > 0 ? (mediumCount / total) * 100 : 0;
  const hardPercent = total > 0 ? (hardCount / total) * 100 : 0;

  // Calculate angles for SVG paths (starting from top, going clockwise)
  const centerX = 90;
  const centerY = 90;
  const radius = 68;
  const innerRadius = 53;
  
  // Convert percentages to degrees
  const easyAngle = (easyPercent / 100) * 360;
  const mediumAngle = (mediumPercent / 100) * 360;
  const hardAngle = (hardPercent / 100) * 360;
  
  // Helper function to create arc path
  const createArc = (startAngle, endAngle, innerR, outerR) => {
    const start = (startAngle - 90) * (Math.PI / 180); // Start from top
    const end = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = centerX + outerR * Math.cos(start);
    const y1 = centerY + outerR * Math.sin(start);
    const x2 = centerX + outerR * Math.cos(end);
    const y2 = centerY + outerR * Math.sin(end);
    
    const x3 = centerX + innerR * Math.cos(end);
    const y3 = centerY + innerR * Math.sin(end);
    const x4 = centerX + innerR * Math.cos(start);
    const y4 = centerY + innerR * Math.sin(start);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };
  
  let currentAngle = 0;
  const easyPath = easyPercent > 0 ? createArc(currentAngle, currentAngle + easyAngle, innerRadius, radius) : '';
  currentAngle += easyAngle;
  const mediumPath = mediumPercent > 0 ? createArc(currentAngle, currentAngle + mediumAngle, innerRadius, radius) : '';
  currentAngle += mediumAngle;
  const hardPath = hardPercent > 0 ? createArc(currentAngle, currentAngle + hardAngle, innerRadius, radius) : '';

  return (
    <div 
      className="leetcode-stats"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="leetcode-logo-container">
        <div className="leetcode-logo">
          <img 
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" 
            alt="LeetCode Logo"
          />
        </div>
        <div className="leetcode-text">LeetCode</div>
      </div>
      <div className="leetcode-circle-wrapper">
        <div className="leetcode-circle">
          <svg width="180" height="180" viewBox="0 0 180 180">
          {/* Background ring (unfilled portion) */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={radius - innerRadius}
          />
          
          {/* Easy segment (Green) */}
          {easyPath && (
            <path
              d={easyPath}
              fill="#4caf50"
              className="leetcode-segment easy"
            />
          )}
          
          {/* Medium segment (Yellow) */}
          {mediumPath && (
            <path
              d={mediumPath}
              fill="#ffc107"
              className="leetcode-segment medium"
            />
          )}
          
          {/* Hard segment (Red) */}
          {hardPath && (
            <path
              d={hardPath}
              fill="#f44336"
              className="leetcode-segment hard"
            />
          )}
        </svg>
        
        <div className="leetcode-center">
          <div className={`leetcode-default ${isHovered ? 'hidden' : 'visible'}`}>
            <div className="leetcode-count">{allCount}</div>
            <div className="leetcode-label">Solved</div>
          </div>
          <div className={`leetcode-breakdown ${isHovered ? 'visible' : 'hidden'}`}>
            <div className="breakdown-item">
              <span className="breakdown-color easy"></span>
              <span>Easy: {easyCount}</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-color medium"></span>
              <span>Medium: {mediumCount}</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-color hard"></span>
              <span>Hard: {hardCount}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;

