import React from 'react';
import './Navigation.css';

const Navigation = ({ activePage, onNavigate }) => {
  return (
    <nav className="main-navigation">
      <ul>
        <li className={activePage === 'showcase' ? 'active' : ''}>
          <button onClick={() => onNavigate('showcase')}>Design System Showcase</button>
        </li>
        <li className={activePage === 'login' ? 'active' : ''}>
          <button onClick={() => onNavigate('login')}>Login Example</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
