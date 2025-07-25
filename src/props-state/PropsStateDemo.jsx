import { useState } from 'react';

function PropsStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Props & State Demo</h2>
      <p>Click count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PropsStateDemo;
