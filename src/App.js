import React, { useState, useEffect } from 'react';
import Person from './componentes/Person';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.title = isVisible ? `Personer Vises` : `Personer Skjult`;
  }, [isVisible]);


  return (

    <div style={{ textAlign: "center" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      {/* && gør noget når true */}
      {isVisible && (
        <>
          <Person name="Ole" />
          <Person name="Jens" />
        </>
      )}

    </div>

  );
};

export default App;
