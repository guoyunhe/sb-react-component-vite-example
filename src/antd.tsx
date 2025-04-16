import { wrap } from '@shadow-bridge/react';
import { Button, ConfigProvider, Empty, Input, Modal } from 'antd';

export interface AntdBlockProps {
  shadowRoot?: ShadowRoot;
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

export function AntdBlock({ open, onCancel, onOk, shadowRoot }: AntdBlockProps) {
  return (
    <div>
      <ConfigProvider getPopupContainer={() => (shadowRoot as any) || document.body}>
        <Input placeholder="Input" />
        <Button>Button</Button>
        <Modal title="Modal" open={open} onOk={onOk} onCancel={onCancel}>
          <Empty />
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default wrap(AntdBlock);
