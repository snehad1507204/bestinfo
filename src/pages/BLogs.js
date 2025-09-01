import React from 'react';
import './Blogs.css';

const BLogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development, including AI integration, progressive web apps, and more.',
      author: 'John Doe',
      date: 'December 15, 2023',
      category: 'Web Development',
      image: '🌐',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure',
      excerpt: 'Learn best practices for building scalable and secure cloud infrastructure that can grow with your business needs.',
      author: 'Jane Smith',
      date: 'December 10, 2023',
      category: 'Cloud Services',
      image: '☁️',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'AI-Powered Business Solutions',
      excerpt: 'Discover how artificial intelligence is transforming business operations and creating new opportunities for innovation.',
      author: 'Mike Johnson',
      date: 'December 5, 2023',
      category: 'AI & ML',
      image: '🤖',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential cybersecurity practices every business should implement to protect against modern threats and vulnerabilities.',
      author: 'Sarah Wilson',
      date: 'November 28, 2023',
      category: 'Security',
      image: '🔒',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Mobile App Development Trends',
      excerpt: 'Stay ahead of the curve with the latest mobile app development trends and technologies for 2024.',
      author: 'David Brown',
      date: 'November 20, 2023',
      category: 'Mobile Apps',
      image: '📱',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Data-Driven Decision Making',
      excerpt: 'How businesses can leverage data analytics to make informed decisions and drive growth.',
      author: 'Emily Davis',
      date: 'November 15, 2023',
      category: 'Data Analytics',
      image: '📊',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="blogs-page">
      <div className="container">
        <div className="blogs-header">
          <h1>Our Blog</h1>
          <p>Stay updated with the latest technology trends, insights, and best practices</p>
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
