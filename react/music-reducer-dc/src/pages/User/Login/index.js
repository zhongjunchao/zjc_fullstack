import React, { useEffect } from 'react';
import { connect } from 'react-redux';
const Login = (props) => {
    const {userInfo}=props
    console.log(userInfo);
    return (
        <div>

        </div>
    )
}
const mapStateToProps = state => ({
    userInfo: state.getIn(["user", "userInfo"])
})
const mapDispatchToProps=dispatch=>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login))