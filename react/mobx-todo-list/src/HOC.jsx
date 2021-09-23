// 高阶组件
import React from 'react';
// 高阶组件就是一个函数
export const withSubscription =(WrappedComponent,selectData)=>{
    //返回值就是组件
    return class extends React.Component{
        constructor(props){
            super(props);
            // 抽象的数组状态的初始化
            this.handleChange=this.handleChange.bind(this)
            this.state={
                data:selectData
            }
        }
    
    componentDidMount(){

    }   
    handleChange(){
        this.setState({
            data:[...this.state.data,{
                id:3,
                text:'text3'
            }]
        })
    }

    render(){
        return <WrappedComponent data={this.state.data} />
    }
    }

}