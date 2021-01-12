import { MenuFoldOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/layouts/MainLayout.module.css';

const ResponsiveDrawer = ({ mainNav, router }) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <MenuFoldOutlined style={{ color: 'white', fontSize: 22 }} onClick={showDrawer} />
            <Drawer
                // title="Basic Drawer"
                // className={styles.phone_nav_drawer}
                bodyStyle={{ padding: 0, color: '#001529' }}
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}>
                <Menu
                    style={{ marginTop: '3rem' }}
                    theme="dark"
                    mode="vertical"
                    defaultSelectedKeys={[
                        mainNav.find((nav) => nav.routeLink === router.pathname).key.toString()
                    ]}>
                    {mainNav.map((nav) => (
                        <Menu.Item onClick={() => setVisible(false)} key={nav.key}>
                            <Link href={nav.routeLink}>{nav.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </div>
    );
};

export default ResponsiveDrawer;
