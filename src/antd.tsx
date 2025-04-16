import { StyleProvider } from '@ant-design/cssinjs';
import { wrap } from '@shadow-bridge/react';
import { Button, ConfigProvider, Empty, Input, Modal } from 'antd';

export interface AntdBlockProps {
  // 💡 ShadowBridge will always pass shadowRoot prop to the component
  shadowRoot?: ShadowRoot;

  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

export function AntdBlock({ open, onCancel, onOk, shadowRoot }: AntdBlockProps) {
  return (
    <StyleProvider
      // 💡 Mount css-in-js <style> under shadowRoot
      container={shadowRoot}
    >
      <ConfigProvider
        // 💡 Mount popups (modal, message, notice, tooltip) under shadowRoot
        getPopupContainer={() => (shadowRoot as any) || document.body}
      >
        <Input placeholder="Input" />
        <Button>Button</Button>
        <Modal title="Modal" open={open} onOk={onOk} onCancel={onCancel}>
          <Empty />
        </Modal>
      </ConfigProvider>
    </StyleProvider>
  );
}

// 💡 Wrap component with ShadowBridge
export default wrap(AntdBlock);
