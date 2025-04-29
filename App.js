import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photoUrl="https://example.com/user-photo.jpg"
      />
    </div>
  );
}

export default App;
