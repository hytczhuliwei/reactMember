/**
 * Created by liwei.zhu
 * 会员中心首页
 */
import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {getUserLevelAction} from '../../actions'
import '../../sass/_home.scss'
import PrivilegeComponents from '../../components/home/PrivilegeComponents'

class IndexView extends Component {
  constructor(props) {
    super(props)
    let levelInfo = props.userLevelInfo
    // 初始化state
    this.state = {
      userLevelInfo: levelInfo,
      levels: levelInfo.levels,
      selectLevel: levelInfo.level,
      selectPrivilege: levelInfo.levels[0]['privilege'],
      myMemberClassNameState: {
        'myMember-content': true,
        'first': levelInfo.level == 'T1',
        'select-first': levelInfo.level == 'T1',
        'second': levelInfo.level == 'T2',
        'select-second': levelInfo.level == 'T2',
        'third': levelInfo.level == 'T3',
        'select-third': levelInfo.level == 'T3',
        'fourth': levelInfo.level == 'T4',
        'select-fourth': levelInfo.level == 'T4',
        'fifth': levelInfo.level == 'T5',
        'select-fifth': levelInfo.level == 'T5'
      }
    }
  }
  componentDidMount() {
    // 组件构建完成，获取数据
    const { dispatch,userLevelInfoIsLoad } = this.props
    if (!userLevelInfoIsLoad) {
      dispatch(getUserLevelAction())
    }
  }
  // 切换不同的level，显示相应的特权
  switchLevelItem (i) {
    let selectLevelStr = 'T'+(i+1)
    this.setState({ selectLevel: selectLevelStr})
    this.setState({ selectPrivilege: this.state.levels[i]['privilege']})
    let nowLevel = this.state.userLevelInfo.level
    this.setState({myMemberClassNameState: {
        'myMember-content': true,
        'first': nowLevel == 'T1',
        'select-first': selectLevelStr == 'T1',
        'second': nowLevel == 'T2',
        'select-second': selectLevelStr == 'T2',
        'third': nowLevel == 'T3',
        'select-third': selectLevelStr == 'T3',
        'fourth': nowLevel == 'T4',
        'select-fourth': selectLevelStr == 'T4',
        'fifth': nowLevel == 'T5',
        'select-fifth': selectLevelStr == 'T5'
      }
    })
  }
  // 接收到新数据
  componentWillReceiveProps (nextProps) {
    let userLevelInfo = nextProps.userLevelInfo
    this.setState({
      userLevelInfo: userLevelInfo,
      levels: userLevelInfo.levels,
      selectLevel: userLevelInfo.level,
      myMemberClassNameState: {
        'myMember-content': true,
        'first': userLevelInfo.level == 'T1',
        'select-first': userLevelInfo.level == 'T1',
        'second': userLevelInfo.level == 'T2',
        'select-second': userLevelInfo.level == 'T2',
        'third': userLevelInfo.level == 'T3',
        'select-third': userLevelInfo.level == 'T3',
        'fourth': userLevelInfo.level == 'T4',
        'select-fourth': userLevelInfo.level == 'T4',
        'fifth': userLevelInfo.level == 'T5',
        'select-fifth': userLevelInfo.level == 'T5'
      }
    })
    for (let i = 0; i<userLevelInfo.levels.length; i++) {
      if (userLevelInfo.levels[i]['name'] === userLevelInfo.level) {
        this.setState({selectPrivilege: userLevelInfo.levels[i]['privilege']})
      }
    }
  }
  render() {
    let userLevelInfo = this.state.userLevelInfo
    let classNames = require('classnames')
    // 为选中等级绑定class
    let myMemberClassName = classNames(this.state.myMemberClassNameState)
    // 为每一个等级绑定相应的class
    let firstItemClassName = classNames({
      'level-item': true,
      'active': userLevelInfo.levels[0]['status'] == '1',
      'current': userLevelInfo.levels[0]['name'] == userLevelInfo.level
    })
    let secondItemClassName = classNames({
      'level-item': true,
      'active': userLevelInfo.levels[1]['status'] == '1',
      'current': userLevelInfo.levels[1]['name'] == userLevelInfo.level
    })
    let thirdItemClassName = classNames({
      'level-item': true,
      'active': userLevelInfo.levels[2]['status'] == '1',
      'current': userLevelInfo.levels[2]['name'] == userLevelInfo.level
    })
    let fourthItemClassName = classNames({
      'level-item': true,
      'active': userLevelInfo.levels[3]['status'] == '1',
      'current': userLevelInfo.levels[3]['name'] == userLevelInfo.level
    })
    let fifthItemClassName = classNames({
      'level-item': true,
      'active': userLevelInfo.levels[4]['status'] == '1',
      'current': userLevelInfo.levels[4]['name'] == userLevelInfo.level
    })
    return (
      <div id="home">
        <div className = "home-header">
          <div className="avatar">
            <img src={userLevelInfo.avatar||'../assets/images/head.png'} />
            <p>{userLevelInfo.level}会员</p>
          </div>
          <div className="header-bar">
            <Link to="/tibean" className="bar-taidou">我的泰豆：{userLevelInfo.tibean}</Link>
            <Link to="/experience" className="bar-experience">我的经验：{userLevelInfo.experience}</Link>
          </div>
        </div>
        <div className="myMember">
          <div className="myMember-header">
            <span>我的会员</span>
          </div>
          <div className={myMemberClassName}>
            <div className="member-show-wrapper">
              <i className={firstItemClassName} onClick={this.switchLevelItem.bind(this, 0)}>T1</i>
              <div className="level-line">
                <div className="level-line-active" style={{width : userLevelInfo.levels[0]['percent']+'%'}}></div>
              </div>
              <i className={secondItemClassName} onClick={this.switchLevelItem.bind(this, 1)}>T2</i>
              <div className="level-line">
                <div className="level-line-active" style={{width : userLevelInfo.levels[1]['percent']+'%'}}></div>
              </div>
              <i className={thirdItemClassName} onClick={this.switchLevelItem.bind(this, 2)}>T3</i>
              <div className="level-line">
                <div className="level-line-active" style={{width : userLevelInfo.levels[2]['percent']+'%'}}></div>
              </div>
              <i className={fourthItemClassName} onClick={this.switchLevelItem.bind(this,3)}>T4</i>
              <div className="level-line">
                <div className="level-line-active" style={{width : userLevelInfo.levels[3]['percent']+'%'}}></div>
              </div>
              <i className={fifthItemClassName} onClick={this.switchLevelItem.bind(this, 4)}>T5</i>
            </div>
            <div className="member-show-line">

            </div>
          </div>
        </div>
        <div className="memberRight">
          <div className="memberRight-header">
            <p>{this.state.selectLevel}会员特权<span>（点击图标查看详情）</span></p>
          </div>
          <div className="memberRight-right-wrapper">
          {this.state.selectPrivilege.map((sp_value) => {
            return <PrivilegeComponents key={sp_value.name} item={sp_value} />
          })}
          </div>
        </div>
        <button className="goOrderBtn">去下单</button>
      </div>
    )
  }
}
// 规定数据类型
IndexView.propTypes={
  userLevelInfo:PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userLevelInfoIsLoad: PropTypes.bool.isRequired
}
// 获取store数据
const mapStateToProps = (state) => {
  const userLevelInfo = state.home.userLevelInfo||[]
  const userLevelInfoIsLoad = state.home.userLevelInfoIsLoad || false
  return {
    userLevelInfo,
    userLevelInfoIsLoad
  }
}
export default connect(mapStateToProps)(IndexView)
