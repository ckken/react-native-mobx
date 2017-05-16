import {observable, action, autorun, computed} from 'mobx'
class Store {
  @observable data = 0
  @action addData(){
    this.data++
  }
}