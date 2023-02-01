import React from 'react';

import Post from './Post';

import Header from './Header';

const category = 'Posts da semana';

function App() {
  return (
    <>
      <Header title='JStacks Blog'>
        <h2> Subtitulo 2 ---- </h2>
      </Header>
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