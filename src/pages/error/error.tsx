import { Result, Button } from 'antd'
import useUitlsHook from '@/hooks/useUitlsHook'
// import utils from '@/utils/index'
const ErrorView: React.FC = () => {
  const { navigation } = useUitlsHook()
  return (
    <div>
      <Result
        status={403}
        title="403"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigation('/login?token=123')}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default ErrorView
