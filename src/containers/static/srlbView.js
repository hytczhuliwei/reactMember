/**
 * Created by liwei.zhu
 * 生日礼包页面
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import '../../sass/_taidouInstruction.scss'

class srlbView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="SrlbInstruction">
        <img src="../../assets/images/srlb-ins-banner.png" />
        <ul className="ti-content">
          <li className="ti-item">
            <div className="ti-item-header">
              <span>生日专享</span>
            </div>
            <div className="ti-item-content">
              <p>超值百元礼包，生日前三天获得，有效期7天。<a>去完善生日信息。</a></p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect()(srlbView)
