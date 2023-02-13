import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#1', subtitle: 'Sub#1', likes: 20, read: false },
    { id: Math.random(), title: 'Title#2', subtitle: 'Sub#2', likes: 20, read: true },
    { id: Math.random(), title: 'Title#3', subtitle: 'Sub#3', likes: 20, read: false },
    { id: Math.random(), title: 'Title#4', subtitle: 'Sub#4', likes: 20, read: true },
    { id: Math.random(), title: 'Title#5', subtitle: 'Sub#5', likes: 20, read: true },
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#${prevState.length + 1}`,
        subtitle: `Sub#${prevState.length + 1}`,
        likes: 20,
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header title='JStacks Blog'>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
      
    </>
  )
}
