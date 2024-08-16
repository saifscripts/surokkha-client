import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import router from './router';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#f26d3e',
            colorInfo: '#f26d3e',
            borderRadius: 4,
          },
          components: {
            Layout: {
              algorithm: true,
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
