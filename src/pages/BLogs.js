import React from 'react';
import './Blogs.css';

const BLogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top IT Skills in Demand for 2024',
      excerpt: 'Discover the most sought-after technical skills that employers are looking for in IT professionals this year.',
      author: 'Best Infosystems Team',
      date: 'December 15, 2023',
      category: 'IT Recruitment',
      image: '💼',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building High-Performance IT Teams',
      excerpt: 'Learn effective strategies for assembling and managing successful IT teams that drive business growth.',
      author: 'Recruitment Experts',
      date: 'December 10, 2023',
      category: 'Team Building',
      image: '👥',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'The Impact of AI on IT Staffing',
      excerpt: 'Explore how artificial intelligence is revolutionizing recruitment processes and candidate matching.',
      author: 'Tech Insights',
      date: 'December 5, 2023',
      category: 'AI & Recruitment',
      image: '🤖',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Remote Work Trends in IT Industry',
      excerpt: 'Essential insights into remote work arrangements and how they affect IT staffing and project management.',
      author: 'Industry Analysts',
      date: 'November 28, 2023',
      category: 'Remote Work',
      image: '🏠',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Staffing Solutions for IT Projects',
      excerpt: 'Comprehensive guide to finding the right IT talent for your project requirements and timelines.',
      author: 'Project Managers',
      date: 'November 20, 2023',
      category: 'Project Staffing',
      image: '📋',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Career Development in IT Sector',
      excerpt: 'How IT professionals can advance their careers through continuous learning and skill development.',
      author: 'Career Advisors',
      date: 'November 15, 2023',
      category: 'Career Growth',
      image: '📈',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="blogs-page">
      <div className="container">
        <div className="blogs-header">
          <h1>Insights & Updates</h1>
          <p>Stay informed with the latest trends in IT staffing, recruitment strategies, and industry insights</p>
        </div>

        <div className="blogs-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                {post.image}
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-author">
                  <span>By {post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BLogs;
