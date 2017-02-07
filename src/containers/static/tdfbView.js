/**
 * Created by liwei.zhu
 * 泰豆抵现页面
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import {getUserLevelRuleAction} from '../../actions'
import '../../sass/_taidouInstruction.scss'

class tdfbView extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUserLevelRuleAction())
  }
  render() {
    return (
      <div id="TdfbInstruction">
        <ul className="ti-content">
          <li className="ti-item">
            <div className="ti-item-header">
              <span>购物泰豆翻倍</span>
            </div>
            <div className="ti-item-content">
              <p className="specialIns">不同等级的会员获得不同系数的泰豆奖励。</p>
              <p>例：T4会员小泰购买了98元精选单品包月花，他将获得实际支付金额的4倍泰豆，即392个泰豆</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>泰豆翻倍数</span>
            </div>
            <div className="ti-item-content">
              <ul className="ti-item-taidouRatio">
                <li className="ti-item-taidouRatio-item">
                  <span>T1</span>
                  <span>X1</span>
                </li>
                <li className="ti-item-taidouRatio-item">
                  <span>T2</span>
                  <span>X1.5</span>
                </li>
                <li className="ti-item-taidouRatio-item">
                  <span>T3</span>
                  <span>X2</span>
                </li>
                <li className="ti-item-taidouRatio-item">
                  <span>T4</span>
                  <span>X3</span>
                </li>
                <li className="ti-item-taidouRatio-item">
                  <span>T5</span>
                  <span>X4</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect()(tdfbView)
