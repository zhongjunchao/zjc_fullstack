import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

// class App extends Component {
//   constructor() {
//     this.state = {

//     }
//   }
//   render() {
//     return (

//     )
//   }
// }

// StatelessComponent
export const App = () => {
  // React hooks name 状态的名字， setName 修改状态用setName 
  const [name, setName] = React.useState('defaultUserName') // state 
  // react hooks 
  // 函数式组件可以借助一些魔法函数来实现状态 
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  // setTimeout(() => {
  //   setName('aaaaa')
  // }, 3000);
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUsernameState}/>
    </>
  )
}