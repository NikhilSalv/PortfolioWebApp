import React from 'react';
import { Link } from 'react-router-dom';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './BlogPreview.css';

const BlogPreview = () => {
  const recentPosts = personalData.blogPosts.slice(0, 3);

  return (
    <section className="blog-preview" id="blog">
      <div className="blog-container">
        <SectionTitle title="Latest Blog Posts" subtitle="Thoughts and insights" />
        <div className="blog-grid">
          {recentPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.readTime}</span>
                </div>
                <Link to="/blog" className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-cta">
          <Link to="/blog">
            <Button variant="primary">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

