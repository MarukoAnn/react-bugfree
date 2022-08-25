import { Button, Checkbox, Form, Input } from "antd";
import { Props } from '@/model/Login'
const userInfoList = [
  {
    label: "用户名",
    name: "username",
    type: "input",
    isrequired: false,
  },
  {
    label: "密码",
    name: "password",
    type: "password",
    isrequired: false,
  },
  {
    label: "记住我",
    name: "remeber",
    type: "checked",
    isrequired: false,
  },
];
const LoginForm: React.FC<Props> = ({success}) => {
  const setFormItem = (type: string) => {
    let el = null;
    switch (type) {
      case "input":
        el = <Input />;
        break;
      case "password":
        el = <Input.Password />;
        break;
      case "checked":
        el = <Checkbox >记住我</Checkbox>;
        break;
      default:
        break;
    }
    return el;
  };
  const onFinish = (value: any) => {
    // console.log('value', value)
    success(value);
  }
  return (
    <Form
      name="loginForm"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      {userInfoList.map((info, index) => {
        return (
            info.type != 'checked' ?
          <Form.Item label={info.label} name={info.name}  key={index}>
            {setFormItem(info.type)}
          </Form.Item> :
           <Form.Item name={info.name} valuePropName={info.type} key={index}  wrapperCol={{  offset: 5}}>
           {setFormItem(info.type)}
         </Form.Item>
        );
      })}
        <Form.Item
              label="  "
              colon={false}
          >
              <Button type="primary" htmlType="submit" block>
              登陆
              </Button>
          </Form.Item>
      {/* <Form.Item wrapperCol={{  offset: 5}}>
        <Button type="primary" htmlType="submit" block>
          登陆
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default LoginForm;
