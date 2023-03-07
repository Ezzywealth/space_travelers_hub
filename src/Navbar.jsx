/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [mainUrl, setMainUrl] = useState('1');

  useEffect(() => {
    if (location.pathname === '/my-profile') {
      setMainUrl('My Profile');
    }
    if (location.pathname === '/missions') {
      setMainUrl('Missions');
    }
    if (location.pathname === '/') {
      setMainUrl('Rockets');
    }
  }, [location]);

  const navLinks = [
    {
      id: 1,
      name: 'Rockets',
      link: '/',
    },
    {
      id: 2,
      name: 'Missions',
      link: 'missions',
    },
    {
      id: 3,
      name: 'My Profile',
      link: 'my-profile',
    },
  ];

  return (
    <>
      <header>
        <div>
          <img src="" alt="" />
          <h2>Space Traveler&apos;s Hub</h2>
        </div>
        <div>
          {navLinks.map((link) => (
            <NavLink
              to={link.link}
              key={link.id}
              style={{ textDecoration: `${(link.name === mainUrl) ? 'underline' : 'none'}` }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
