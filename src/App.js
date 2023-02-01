import React from 'react';

import Post from './Post';

import Header from './Header';

const posts = [
  {title: 'Title#1', subtitle: 'Sub#1', likes: 20},
  {title: 'Title#2', subtitle: 'Sub#2', likes: 50},
  {title: 'Title#3', subtitle: 'Sub#3', likes: 10},
]

function App() {
  return (
    <>
      <Header title='JStacks Blog'>
        <h2> Subtitulo 2 ---- </h2>
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