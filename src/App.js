import React, { useState } from 'react';

import Post from './Post';

import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#1', subtitle: 'Sub#1', likes: 20 },
    { id: Math.random(), title: 'Title#2', subtitle: 'Sub#2', likes: 20 },
    { id: Math.random(), title: 'Title#3', subtitle: 'Sub#3', likes: 20 },
  ])

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title#${prevState.length + 1}`,
          subtitle: `Sub#${prevState.length + 1}`,
          likes: 20 
        }
      ])
    }, 2000);
  }

  return (
    <>
      <Header title='JStacks Blog'>
        <h2> Subtitulo 2 ---- </h2>
        <button onClick={handleRefresh}> Atualizar </button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
      
    </>
  )
}

export default App;