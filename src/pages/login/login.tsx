
import {inject, observer} from 'mobx-react'
import { LoginStore } from '@/model/store'
interface Props {
    loginStore: LoginStore;
}
 // 需要那个 store 就监听那一个
const Login: React.FC<Props> = (props: Props) => {
    return (
        <div>
            {
                props.loginStore.token
            }
        </div>
    )
}
export default inject('loginStore')(observer(Login));