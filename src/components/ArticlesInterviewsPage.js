import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';

const ArticlesInterviewsPage = () => {
  const fadeInArticles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [hoveredArticle, setHoveredArticle] = React.useState(null);

  const springProps = useSpring({
    transform: hoveredArticle ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 150, friction: 12 },
  });

  const articles = [
    {
      id: 1,
      title: 'Article 1',
      content: 'This is the content of the first article.',
      image: './images/project.jpg',
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'This is the content of the second article.',
      image: './images/project.jpg',
    },
    // Add more articles as needed
  ];

  const handleMouseEnter = (article) => {
    setHoveredArticle(article);
  };

  const handleMouseLeave = () => {
    setHoveredArticle(null);
  };

  return (
    <animated.section className="trial-block shadow3 text-center" id="articles" style={fadeInArticles}>
      <h2 className="text-center badge badge-info mb-4">Articles & Interviews</h2>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-6 mb-4" key={article.id}>
              <animated.div
                className="card border-0 card-sm"
                onMouseEnter={() => handleMouseEnter(article)}
                onMouseLeave={handleMouseLeave}
                style={{ ...springProps, width: '80%', margin: '0 auto' }}
              >
                <img
                  src={article.image}
                  className="card-img-top img-thumbnail"
                  alt={`Article ${article.id}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="card-title h6">{article.title}</h3>
                  <p className="card-text small">{article.content}</p>
                </div>
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default ArticlesInterviewsPage;
