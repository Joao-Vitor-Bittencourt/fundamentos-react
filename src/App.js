import React from 'react';

import Post from './Post';

import Header from './Header';

function App() {
  return (
    <>
      <Header title='JStacks Blog'>
        <h2> Subtitulo 2 ---- </h2>
      </Header>
      <hr />

      <Post 
        likes={20}
        post={{
          title: 'Noticia 1',
          subtitle: 'Subtitulo 1'
        }}
      />
      <Post
        likes={50}
        post={{
          title: 'Noticia 2',
          subtitle: 'Subtitulo 2'
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Noticia 3',
          subtitle: 'Subtitulo 3'
        }}
      />
    </>
  )
}

export default App;