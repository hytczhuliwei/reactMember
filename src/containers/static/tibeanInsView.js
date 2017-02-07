/**
 * Created by liwei.zhu
 * 泰豆说明页面
 */
import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table } from 'antd-mobile';
import {getUserAmountRuleAction} from '../../actions'
import '../../sass/_taidouInstruction.scss'

class tibeanInsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      useActive: true
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUserAmountRuleAction())
  }
  switchItem (v) {
    this.setState({
      useActive: v
    })
  }
  render() {
    let {amountRule} = this.props
    let classNames = require('classnames')
    let iItemClassName = classNames({
      'active': this.state.useActive,
    })
    let oItemClassName = classNames({
      'active': !this.state.useActive,
    })
    // 定义Table控件的数据
    const columns = [
      { title: '标题', dataIndex: 'title', key: 'title', width:'42%'  },
      { title: '值', dataIndex: 'a', key: 'a' }
    ];

    const data = [
      { title: '单笔实际支付金额', a: '每1元可获得泰豆数量' }
    ];
    for (let i = 0; i<amountRule.length;i++){
      let titlev = '('+amountRule[i].amountStart+'，'+amountRule[i].amountEnd+')'
      let av = amountRule[i].tibean
      let keyv = i + 1
      let row = { title: titlev, a: av, key: keyv }
      data.push(row)
    }
    return (
      <div id="TaidouInstruction">
        <div className="ti-header">
          <div onClick={this.switchItem.bind(this,true)}><span className={iItemClassName}>如何使用</span></div>
          <div onClick={this.switchItem.bind(this,false)}><span className={oItemClassName}>如何获得</span></div>
        </div>
        <ul className="ti-content" style={{ display: this.state.useActive ? 'block' : 'none' }}>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>适用范围</span>
            </div>
            <div className="ti-item-content">
              <p>1、泰豆仅可在泰笛生活使用，不可转赠。</p>
              <p>2、泰笛生活部分活动可能不适用此规则，以活动具体规则为准。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>退货</span>
            </div>
            <div className="ti-item-content">
              <p>泰豆一经使用，不可退回，敬请谅解。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>消费抵现</span>
            </div>
            <div className="ti-item-content">
              <p>1、100泰豆抵扣1元人民币，至多可抵扣订单需支付金额的50%。</p>
              <p>2、每次使用的泰豆以10个为单位，泰豆低于10个则不能使用。</p>
              <p>3、特价商品可使用泰豆抵现，优惠券与泰豆抵现不可同时使用。</p>
            </div>
          </li>
        </ul>
        <ul className="ti-content" style={{ display : this.state.useActive ? 'none' : 'block' }}>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>上线</span>
            </div>
            <div className="ti-item-content">
              <p>每次上线奖励5泰豆，每天限一次；</p>
              <p>连续上线7天，额外奖励20泰豆；</p>
              <p>连续上线15天，再奖励30泰豆。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>完善个人资料</span>
            </div>
            <div className="ti-item-content">
              <p>首次录入全部个人资料，奖励200泰豆。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>消费</span>
            </div>
            <div className="ti-item-content">
              <Table
                titleFixed
                columns={columns}
                dataSource={data}
              />
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>评价</span>
            </div>
            <div className="ti-item-content">
              <p>单笔实际支付金额300元以下，发表评价获得10泰豆；</p>
              <p>单笔实际支付金额300元以上，发表评价获得20泰豆。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>分享</span>
            </div>
            <div className="ti-item-content">
              <p>分享一次获得40泰豆；</p>
              <p>同一商品分享至不同平台，泰豆可累加；</p>
              <p>不同商品分享至同一平台，泰豆可累加；</p>
              <p>分享可获泰豆上限每天200；</p>
              <p>分享后对方成功购买，分享者再获50泰豆，无上限。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>吐槽</span>
            </div>
            <div className="ti-item-content">
              <p>对泰笛APP应用体验提出改进意见和建议，审核通过后获得50泰豆。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>附加</span>
            </div>
            <div className="ti-item-content">
              <p>月消费次数≥3次，获得300泰豆。</p>
              <p>运营性活动奖励，具体以其单独公示的规则为准。</p>
            </div>
          </li>
        </ul>
        <Link to="/smxy" className="insXyBtn">说明协议</Link>
      </div>
    )
  }
}
tibeanInsView.propTypes={
  amountRule:PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

const mapStateToProps = (state) => {
  const amountRule = state.home.amountRule||[]
  return {
    amountRule
  }
}
export default connect(mapStateToProps)(tibeanInsView)
