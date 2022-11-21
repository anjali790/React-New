import React from 'react';

export function Data({title, image, instruction}) {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt=""></img>
      <p>{instruction}</p>
    </>
  )
}
