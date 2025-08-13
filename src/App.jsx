import React from 'react';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

const App = () => {
  // Simple navigation for demonstration
  const [page, setPage] = React.useState('home');

  let PageComponent;
  if (page === 'home') PageComponent = Home;
  else if (page === 'portfolio') PageComponent = Portfolio;
  else if (page === 'contact') PageComponent = Contact;

  return (
    <div>
      <nav style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('portfolio')}>Portfolio</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>
      <PageComponent />
    </div>
  );
};

export default App;
