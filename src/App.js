import React from 'react';
import CarouselComponent from './components/CarouselComponent';

function App() {
  // Replace with the logged-in user's ID
  const userId = 'user123'; 

  return (
    <div className="App">
      <header>
        <h1>User Profile</h1>
      </header>
      <main>
        <CarouselComponent userId={userId} />
      </main>
    </div>
  );
}

export default App;
