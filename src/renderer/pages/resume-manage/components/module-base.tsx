import { FC } from 'react';
import { Form, Input, Button } from 'antd';

import { BASE_FORM_FIELDS } from '../constants/resume-modules';

interface ModuleBaseProps {
  onSuccess: (formData: Record<keyof NResume.Profile, any>) => void;
  onCancel: VoidFunction;
}

const Item = Form.Item;
const { avatar, username, area, major, degree, hometown, political } = BASE_FORM_FIELDS;

export const ModuleBase: FC<ModuleBaseProps> = (props) => {
  const { onSuccess, onCancel } = props;

  const handleFormFinish = (values: Record<keyof NResume.Profile, any>) => {
    onSuccess(values);
  };

  const handleFormFailed = (errInfo: any) => {
    console.log(errInfo);
  };

  return (
    <Form
      onFinish={handleFormFinish}
      onFinishFailed={handleFormFailed}
      labelCol={{
        span: 4,
      }}
    >
      <Item label={avatar.label} name={avatar.field}>
        <Input type="text" placeholder="请上传您的个人照" />
      </Item>

      <Item
        label={username.label}
        name={username.field}
        rules={[
          {
            required: true,
            message: '姓名不能为空',
          },
        ]}
      >
        <Input type="text" placeholder="请输入您的姓名" />
      </Item>

      <Item label={area.label} name={area.field}>
        <Input type="text" placeholder="请输入所在地区" />
      </Item>

      <Item label={major.label} name={major.field}>
        <Input type="text" placeholder="请输入相关专业" />
      </Item>

      <Item label={degree.label} name={degree.field}>
        <Input type="text" placeholder="请输入您的学位" />
      </Item>

      <Item label={hometown.label} name={hometown.field}>
        <Input type="text" placeholder="请输入您的籍贯" />
      </Item>

      <Item label={political.label} name={political.field}>
        <Input type="text" placeholder="请输入政治面貌" />
      </Item>

      <Item style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
          确 定
        </Button>
        <Button type="primary" style={{ marginLeft: 24 }} onClick={onCancel}>
          取消
        </Button>
      </Item>
    </Form>
  );
};
