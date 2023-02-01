import React from 'react';

import Post from './Post';

const category = 'Posts da semana';

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post 
        post={{
          title: 'Noticia 1',
          subtitle: 'Subtitulo 1'
        }}
      />
      <Post 
        post={{
          title: 'Noticia 2',
          subtitle: 'Subtitulo 2'
        }}
      />
    </>
  )
}

export default App;