import React, { useState, useEffect } from 'react';

function App() {
  // Usagem do Hook useState!!!
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // Usage do Hook useEffect
  // Simula o componentDidMount()
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // Simula o componentDidUpdate()
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        +
      </button>
    </>
  );
}

export default App;
