/**
 * Created by liwei.zhu
 * 消费抵现页面
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import '../../sass/_taidouInstruction.scss'

class xfdxView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="XfdxInstruction">
        <img src="../../assets/images/xfdx-ins-banner.png" />
        <ul className="ti-content">
          <li className="ti-item">
            <div className="ti-item-header">
              <span>抵现规则</span>
            </div>
            <div className="ti-item-content">
              <p>1、100泰豆抵扣1元人民币，至多可抵扣订单需支付金额的50%。</p>
              <p>2、每次使用的泰豆数量以10个为单位，低于10个则不能使用。</p>
              <p>3、特价商品可使用泰豆抵现，优惠券与泰豆抵现不可同时使用。</p>
              <p>4、泰豆自获得之日起有效期1年，滚动清空。</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect()(xfdxView)
