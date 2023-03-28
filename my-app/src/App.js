import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1 className='e2e-title'>{data.title}</h1>
          <p className='e2e-para' >{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
