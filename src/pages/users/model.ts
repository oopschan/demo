import { Effect, Reducer, Subscription} from 'umi'

interface UserModelType{
  namespace:String,
  state:{},
  reducers:{},
  effects:{},
  subscriptions:{
    setup:Subscription
  }
};

const UserModel: UserModelType ={
  namespace:'users',
  state:{
    name:''
  },
  reducers:{
  },
  effects:{
  },
  subscriptions:{
    setup({ dispatch, history },done) {

    }
  }


}

export default UserModel;
