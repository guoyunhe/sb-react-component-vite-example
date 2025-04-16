import { useState } from 'react';
import { AntdBlock } from './antd';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Ant Design Modal</button>
      <AntdBlock open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)} />
    </div>
  );
}

export default App;
