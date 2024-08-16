import { Button, Checkbox, Form, Input, theme } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    token: { colorPrimaryBg },
  } = theme.useToken();

  const onFinish = async (credentials) => {
    const toastId = toast.loading('Logging in...');

    try {
      const data = await login(credentials).unwrap();
      const token = data.data.accessToken;
      const user = jwtDecode(token);
      dispatch(setUser({ user, token }));
      toast.success('Successfully logged in!', { id: toastId, duration: 2000 });
      navigate(state?.pathname || `/${user.role}/dashboard`);
    } catch (error) {
      toast.error('Something Went Wrong!', { id: toastId, duration: 2000 });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        background: colorPrimaryBg,
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <Form
        name="basic"
        labelCol={{
          span: 40,
        }}
        wrapperCol={{
          span: 40,
        }}
        style={{
          width: '100%',
          maxWidth: 400,
          border: '1px solid #eeeeee',
          padding: 32,
          margin: 16,
          borderRadius: 8,
          background: 'white',
        }}
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          type="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              width: '100%',
            }}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
