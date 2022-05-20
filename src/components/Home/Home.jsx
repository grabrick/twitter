import React from 'react';
import Nav from '../Nav/Nav'
import News from '../News/News'
import Feed from '../Feed/Feed'


function Home() {
  return (
    <>
      <Nav />
      <Feed />
      <News />
    </>
  );
}

export default Home