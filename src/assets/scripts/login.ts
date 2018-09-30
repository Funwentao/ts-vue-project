import {Vue} from 'vue-property-decorator';
import Component from 'vue-class-component';
import fetch from 'isomorphic-fetch';
import {login} from '../apis/commonApi';

@Component
export default class Login extends Vue {

    private account: string = '123';
    private password: string = '123';

    public login() {
        const {account, password} = this;
        fetch(login, {

        }).then((res: any) => {
            return res.json();
        }).then((data: object) => {
            
        });
    }
}
