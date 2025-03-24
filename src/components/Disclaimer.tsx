import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-title">
        <span>💡</span> Search Tips & Disclaimer
      </div>
      <div className="disclaimer-content">
        <p>
          Our tool uses AI transcription to search through videos. Due to the nature of speech recognition, 
          some words might be transcribed differently than expected. Here are some tips to improve your search:
        </p>
        
        <div className="disclaimer-tips">
          <div className="disclaimer-tip">
            <span>⚡</span>
            <div>
              <strong>Exact Matches Only</strong>
              <p>We search for exact matches, not similar-sounding words. Try using the exact things you remember from the video.</p>
            </div>
          </div>

          <div className="disclaimer-tip">
            <span>💡</span>
            <div>
              <strong>Be Flexible with Your Search Terms</strong>
              <p>Try different variations and focus on common words or phrases rather than specific names. You don't need to remember the entire quote - just search for the exact words you remember from within the quote.</p>
            </div>
          </div>
          
          <div className="disclaimer-tip">
            <span>📝</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <strong>Use Shorter Phrases or Keywords</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Search fewer words each time when you don't get results
                </span>
              </div>
              <div className="disclaimer-examples">
                <div className="disclaimer-example">
                  <p>Instead of: "Maushold family of three"</p>
                  <p>Try: "family of three"</p>
                </div>
                <div className="disclaimer-example">
                  <p>Instead of: "mahdi is on vacation"</p>
                  <p>Try: "is on vacation"</p>
                </div>
                <div className="disclaimer-example">
                  <p>Instead of: "long complex phrase"</p>
                  <p>Try: "complex phrase"</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    If no results → Try: "phrase"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="disclaimer-tip">
            <span>🚩</span>
            <div>
              <strong>Help Improve the Database</strong>
              <p>If you find incorrect transcriptions, use the flag button to help us improve the search results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer; 