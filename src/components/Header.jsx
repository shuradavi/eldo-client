import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Товары
      </a>
    ),
    key: 'alipay',
  },
  {
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Корзина
      </a>
    ),
    key: 'alipay',
  },
  {
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Оплата и доставка
      </a>
    ),
    key: 'alipay',
  },
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;