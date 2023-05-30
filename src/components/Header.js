import React, { useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ComputerTwoTone, Brightness2Outlined, Brightness2Rounded } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';

import '../App.css';
import './../styles/Header.css';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import Project from './Projects';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const IconeInicio = darkMode ? <Brightness2Rounded /> : <Brightness2Outlined />;

  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog', color: 'blue' },
    { to: '/projects', label: 'Projects', color: 'green' },
    { to: 'https://github.com/luizcsbh', label: 'Github', color: 'purple' },
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className='container'>
            <header>
                <a href='/' className='link-header'>
                    <Grid className='centralize' container spacing={1}>
                        <Grid item xs={1}>
                        <ComputerTwoTone fontSize='large' color='success' />
                        </Grid>
                        <Grid item xs={11}>
                        <h1 className='left-alignment'>Luiz Santos</h1>
                        </Grid>
                    </Grid>
                </a>
                <nav>
                    <Grid container >
                        {links.map((link, index) => (
                        <Grid key={index}>
                            {link.to.startsWith('http') ? (
                            <a
                                href={link.to}
                                className={`link link-${index} grid-header${location.pathname === link.to ? '' : 'active'}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {link.label}
                            </a>
                            ) : (
                            <NavLink
                                to={link.to}
                                activeClassName={`${location.pathname === link.to ? 'active' : ''}`}
                                className={`link link-${index} grid-header`} 
                            >
                                {link.label}
                            </NavLink>
                            )}  
                        </Grid>
                        ))}
                        <Button className='div-button' variant='outlined' color='warning' onClick={toggleDarkMode} startIcon={IconeInicio} />
                    </Grid>
                </nav>
            </header>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/projects' element={<Project />} />
        </Routes>
    </div>
  );
}

export default Header;
