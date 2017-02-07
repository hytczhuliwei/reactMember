/**
 * Created by liwei.zhu
 * 经验值说明页面
 */
import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table } from 'antd-mobile';
import {getUserLevelRuleAction, getUserAmountRuleAction} from '../../actions'
import '../../sass/_taidouInstruction.scss'

class experienceInsView extends Component {
  constructor(props) {
    super(props)
    // 初始化state
    this.state = {
      useActive: true
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    // 组件构建完成后调用action获取数据
    dispatch(getUserAmountRuleAction())
    dispatch(getUserLevelRuleAction())
  }
  // 切换类别
  switchItem (v) {
    this.setState({
      useActive: v
    })
  }
  render() {
    let {amountRule,levelRule} = this.props
    let classNames = require('classnames')
    // 设置类别的className
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
    const scolumns = [
      { title: '等级', dataIndex: 'title', key: 'title', width: '15%'  },
      { title: '有效期', dataIndex: 'a', key: 'a' }
    ];

    const sdata = [
      { title: '等级', a: '有效期'},
      { title: 'T1', a: '永久', key:'1'},
      { title: 'T2', a: '永久', key:'2' },
      { title: 'T3', a: '自然年年末扣除120经验值 等级重新计算', key:'3' },
      { title: 'T4', a: '自然年年末扣除400经验值 等级重新计算', key:'4' },
      { title: 'T5', a: '自然年年末扣除1000经验值 等级重新计算', key:'5' },
    ];
    const bcolumns = [
      { title: '标题', dataIndex: 'title', key: 'title', width: '40%' },
      { title: '值', dataIndex: 'a', key: 'a' },
      { title: '值', dataIndex: 'b', key: 'b' },
      { title: '值', dataIndex: 'c', key: 'c' },
      { title: '值', dataIndex: 'd', key: 'd' },
      { title: '值', dataIndex: 'e', key: 'e' }
    ];

    const bdata = [
      {title: '特权/等级', a:'T1', b:'T2', c:'T3', d:'T4', e:'T5'},
      {title: levelRule[0]['privilege'][0].name, a: levelRule[0]['privilege'][0].multiple, b: levelRule[1]['privilege'][0].multiple, c: levelRule[2]['privilege'][0].multiple, d: levelRule[3]['privilege'][0].multiple, e: levelRule[4]['privilege'][0].multiple, key: 1},
      {title: levelRule[0]['privilege'][1].name, a: levelRule[0]['privilege'][1].status == '1'?'√':'', b: levelRule[1]['privilege'][1].status == '1'?'√':'', c: levelRule[2]['privilege'][1].status == '1'?'√':'', d: levelRule[3]['privilege'][1].status == '1'?'√':'', e: levelRule[4]['privilege'][1].status == '1'?'√':'', key: 2},
      {title: levelRule[0]['privilege'][2].name, a: levelRule[0]['privilege'][2].status == '1'?'√':'', b: levelRule[1]['privilege'][2].status == '1'?'√':'', c: levelRule[2]['privilege'][2].status == '1'?'√':'', d: levelRule[3]['privilege'][2].status == '1'?'√':'', e: levelRule[4]['privilege'][2].status == '1'?'√':'', key: 3}
    ];
    return (
      <div id="ExInstruction">
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
              <p>1、经验值仅可在泰笛生活使用，不可转赠。</p>
              <p>2、泰笛生活部分活动可能不适用此规则，以活动具体规则为准。</p>
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>有效期</span>
            </div>
            <div className="ti-item-content">
              <Table
                titleFixed
                columns={scolumns}
                dataSource={sdata}
              />
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>权益</span>
            </div>
            <div className="ti-item-content">
              <Table
                titleFixed
                columns={bcolumns}
                dataSource={bdata}
              />
              <p className="specialIns">特权说明：</p>
              <p>1、购物泰豆翻倍：不同等级会员消费获得不同系数的泰豆奖励。</p>
              <p>2、消费抵现： 100泰豆抵扣1元人民币，至多可抵扣订单需支付金额的50%；每次使用的泰豆数量以10个为单位，低于10个则不能使用；特价商品可使用泰豆抵现，优惠券与泰豆抵现不可同时使用；泰豆自获得之日起有效期1年，滚动清空。</p>
              <p>3、生日礼包：超值大额优惠券礼包，限当天使用。</p>
            </div>
          </li>
        </ul>
        <ul className="ti-content" style={{ display : this.state.useActive ? 'none' : 'block' }}>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>等级</span>
            </div>
            <div className="ti-item-content">
              <p>会员等级由经验值决定，泰笛会员分为5级，级别越高特权越多。</p>
              <img src="../../assets/images/level-ins.png" />
            </div>
          </li>
          <li className="ti-item">
            <div className="ti-item-header">
              <span>获得方式</span>
            </div>
            <div className="ti-item-content">
              <p>泰笛会员在泰笛购买商品、分享订单等，会获得经验值。</p>
              <Table
                titleFixed
                columns={columns}
                dataSource={data}
              />
              <p><span>*</span>&nbsp;分享后对方购买成功，您将获得20点经验值，无上限。</p>
            </div>
          </li>
        </ul>
        <Link to="/smxy" className="insXyBtn">说明协议</Link>
      </div>
    )
  }
}
experienceInsView.propTypes={
  amountRule:PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  levelRule:PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

const mapStateToProps = (state) => {
  const amountRule = state.home.amountRule||[]
  const levelRule = state.home.levelRule||[]
  return {
    amountRule,
    levelRule
  }
}
export default connect(mapStateToProps)(experienceInsView)
