import { useState } from 'react';

export default function Alert({
  input,
  setInput,
  isClicked,
  setIsClicked,
}: any) {
  return (
    <>
      <button
        className='alertbtn'
        onClick={(event) => setIsClicked(!isClicked)}
      ></button>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}
