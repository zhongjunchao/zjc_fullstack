import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './index.css';
import {getProductDetail} from '../../store/reducers/product/actions';
const Detail = (props) => {
  const { baseInfo, detail, getProductDetailDispatch } = props;
  const handle = (ev, type) => {
    ev.preventDefault();
    if (!baseInfo) {
      console.log('请登录');
      props.history.push('/user/login');
    }
    
  }
  console.log(detail, '-------------');
  useEffect(() => {
    // console.log(props);
    let id = props.match.params.id || 1;
    getProductDetailDispatch(id);
  }, [])
  useEffect(() => {
    if (detail.images) {
      new Swiper('.detail-swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      })
    }
  }, [detail])
  return (
    detail.id?<section className="detailBox">
      <div className="swiper-container detail-swiper">
        <div className="swiper-wrapper">
          {detail.images.map((item, index) =>{
            return <div className="swiper-slide" key={index}>
              <img src={item} alt=""/>
            </div>
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="info">
        <div className="price">
          <span className="price1">{detail.discount}</span>
          {detail.discount === detail.price?null:<span className="price2">{detail.price}</span>}
          {detail.tag.split('|').map((item,index) => {
            return item?<span className="tag" key={index}>{item}</span>:null
          })}
        </div>
        <div className="title">{detail.title}</div>
        <p className="desc">{detail.detail.text}</p>
      </div>
      <div className="xiangxi">
        {detail.detail.images.map((item, index) => {
          return <img src={item} key={index}/>
        })}
      </div>
      <div className="bottomBtn">
        <div className="cartIcon"
          onClick={ev => {
            props.history.push('/cart');
          }}
        >
          <i></i>
          <span>购物车</span>
        </div>
        <div className="btn">
          <a href="javascript:;" onClick={ev=>{
            handle(ev, 'ADD')
          }}>加入购物车</a>
          <a href="javascript:;" onClick={ev=>{
            handle(ev, 'PAY')
          }}>立即购买</a>
        </div>
      </div>
    </section>
    : <>正在请求中..</>
  )
}

const mapStateToProps = (state) => {
  return {
    baseInfo: state.user.baseInfo,
    detail: state.product.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetailDispatch(id) {
      dispatch(getProductDetail(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
