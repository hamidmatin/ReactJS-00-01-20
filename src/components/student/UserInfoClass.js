import {v4 as uuidGenerator} from 'uuid'
class UserInfo {
  constructor() {
    this.id = uuidGenerator();
    this.name = '';
    this.username = '';
    this.email = '';
    this.phone = '';
    this.website = '';
  }
}

export default UserInfo