import React, { useState, useEffect, useMemo, useCallback } from 'react';

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

  // Usage do Hook useMemo
  const techSize = useMemo(() => tech.length, [tech]);

  // Usage do Hook useCallback
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
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
