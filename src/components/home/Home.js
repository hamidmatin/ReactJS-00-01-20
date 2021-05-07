import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const paragStyle = {
    fontSize: '20px',
    color: '#555',
    fontWeight: '300'
  }

  const headingStyle= {
    ...paragStyle,
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: 900,
  }
  return (
    <div>
      <h2 className='page-title'>
        <span>Home</span>
      </h2>
      <h3 style={headingStyle}>Test Style</h3>
      <p style={paragStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        doloribus sit maiores deleniti assumenda, quae, fuga voluptates aut,
        impedit nam magni dolorum possimus quo. Alias totam sit repellat ullam
        nam!
      </p>
      <p style={paragStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        doloribus sit maiores deleniti assumenda, quae, fuga voluptates aut,
        impedit nam magni dolorum possimus quo. Alias totam sit repellat ullam
        nam!
      </p>
      <p style={paragStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        doloribus sit maiores deleniti assumenda, quae, fuga voluptates aut,
        impedit nam magni dolorum possimus quo. Alias totam sit repellat ullam
        nam!
      </p>
      <Link to='/ErrorPage' style={{textDecoration: 'none', color: 'red'}}>Page not found</Link>
    </div>

  );
}
