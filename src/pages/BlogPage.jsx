import React from 'react';
import { personalData } from '../data/personal';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <main className="blog-page">
      <div className="blog-page-container">
        <SectionTitle title="Blog" subtitle="My thoughts and insights" />
        <div className="blog-posts">
          {personalData.blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more-link">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

