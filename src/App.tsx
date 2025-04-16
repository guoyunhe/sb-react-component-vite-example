import { load } from '@shadow-bridge/react';
import { useState } from 'react';

const AntdBlock = load<any>({
  script: 'https://guoyunhe.github.io/sb-react-component-vite-example/antd.js',
  styles: ['https://guoyunhe.github.io/sb-react-component-vite-example/antd.css'],
  loadingFallback: () => <span>Loading</span>,
  failedFallback: (error) => <span>Failed to load: {error.message}</span>,
});

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Ant Design Modal</button>
      <AntdBlock
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}
