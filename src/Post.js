import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong><br/>
        <small>{props.post.subtitle}</small>
      </article>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      Media:{props.likes / 2}
      <br/>
      <br/>
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }
  ).isRequired
} 