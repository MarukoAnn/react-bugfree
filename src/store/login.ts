import {observable, action} from 'mobx'

class LoginStore {
    @observable token = 'xxx';

    @action setToken(option: string): void {
        this.token = option
    }
}
let loginStore = new LoginStore();

export default loginStore