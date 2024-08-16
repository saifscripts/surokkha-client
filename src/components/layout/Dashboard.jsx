import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorPrimaryBg, colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Sidebar />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorPrimaryBg,
          }}
        />
        <Content
          style={{
            height: '80vh',
            overflowY: 'scroll',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
