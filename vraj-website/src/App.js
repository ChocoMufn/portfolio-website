import React from 'react';

const AppleStyleWebsite = () => {
  return (
    <div className="apple-style-website">
      <header>
        <nav>
          <ul className='navigation'>
            <li>About Me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to our Website</h1>
          <p>Discover our amazing products and services.</p>
          <button>Learn More</button>
        </section>

        <section className="products">
          <h2>Our Products</h2>
          {/* Display your product cards or images here */}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Website</p>
      </footer>
    </div>
  );
};

export default AppleStyleWebsite;
