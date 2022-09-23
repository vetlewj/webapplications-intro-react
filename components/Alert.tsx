import { useState } from 'react';

export default function Alert() {
  const [input, setInput] = useState('');
  return (
    <>
      <button className='alertbtn' onClick={() => alert(input)}></button>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}
