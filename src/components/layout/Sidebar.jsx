import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/transparent-logo.png';
import { logout } from '../../redux/features/auth/authSlice';

const { Sider } = Layout;

const items = [
  {
    key: 'vaccinees',
    label: <NavLink to="">Vaccinees</NavLink>,
    icon: <UserOutlined />,
  },
  {
    key: 'settings',
    label: <NavLink to="settings">Settings</NavLink>,
    icon: <SettingOutlined />,
  },
];

const Sidebar = () => {
  const {
    token: { colorFill, colorPrimaryText },
  } = theme.useToken();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{}}>
      <div className="text-white text-center mt-3 mb-4 flex justify-center items-center gap-2">
        <img src={logo} alt="Logo" className="w-8" />
        <span className="text-lg">Surokkha</span>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
      <div
        style={{
          padding: '10px',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Button
          style={{
            width: '100%',
            background: colorFill,
            color: colorPrimaryText,
            border: 'none',
            fontSize: '1rem',
            padding: '1.125rem',
            gap: '0.75rem',
          }}
          onClick={handleLogout}
        >
          <LogoutOutlined />
          <span>Logout</span>
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
