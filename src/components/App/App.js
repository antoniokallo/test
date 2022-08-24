import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Battle, EndMenu, StartMenu } from 'components';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
   
    <div className={styles.main}>
    {/* <nav>
      <ul>
      <li>
        <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/StartMenu">Contacts</Link>
        </li>
        <li>
        <Link to="/Battle">battle</Link>
        </li>
       
      </ul>
    </nav>
    
      <Routes>
        <Route path='/StartMenu' element={<StartMenu />}/>
        <Route path='/Battle' element={<Battle />}/>
        
      </Routes> */}
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}

<nav classname={styles.secondary}>
      <ul>
      <button>
        <Link to="/">home</Link>
        </button>
        <button>
          <Link to="/StartMenu">Contacts</Link>
        </button>
        <button>
        <Link to="/Battle">battle</Link>
        </button>
       
      </ul>
    </nav>
    
      <Routes>
        <Route path='/StartMenu' element={<StartMenu />}/>
        <Route path='/Battle' element={<Battle />}/>
        
      </Routes>

    </div>
    
  );
};
