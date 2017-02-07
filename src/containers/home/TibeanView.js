/**
 * Created by liwei.zhu
 * 用户泰豆页面
 */
import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ListView } from 'antd-mobile';
import {getUserTibeanAction} from '../../actions'
import '../../sass/_taidou.scss'

// ListView控件数据参数，每页数量，页码
// const NUM_ROWS = 0;
let pageIndex = -1;
// 建立一个ListView组件
const LIST = React.createClass({
  // ListView初始化
  getInitialState() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    // 生成ListView的数据项
    this.genData = (pIndex = -1) => {
      const dataBlob = {};
      if(pIndex == -1){
        return false
      }
      for (let i = 0; i < this.NUM_ROWS; i++) {
        const ii = (pIndex * this.NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
      }
      // console.log(dataBlob)
      return dataBlob;
    };
    this.rData = this.genData();
    // 保存数据到state中
    return {
      dataSource: dataSource.cloneWithRows(this.rData),
      isLoading: false,
      isAllLoaded: false,
      type: 'reward'
    };
  },
  componentDidMount() {
    // you can scroll to the specified position
    // this.refs.lv.refs.listview.scrollTo(0, 200);
  },
  // 接收到新数据
  componentWillReceiveProps (nextProps) {
    let tibeanData = nextProps.tibeanData
    // 检测是否已全部加载完成
    this.setState({
      isAllLoaded: tibeanData.nextPage == '-1'? true: false
    })
    if (!tibeanData.logs) {
      return false
    }
    let pageSize = tibeanData.logs.length
    this.NUM_ROWS = pageSize
    if(pageSize > 0){
      let currentType = tibeanData.logs[0]['type']
      // 判断是切换类型还是加载更多数据
      if(currentType != this.state.type){
        // 切换类型则初始化页码和DataSource
        pageIndex = 0
        let dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.rData = { ...this.rData, ...this.genData(pageIndex) };
        this.setState({
          dataSource: dataSource.cloneWithRows(this.rData),
          isLoading: false,
          type: currentType
        });
      } else{
        // 加载更多
        pageIndex++
        setTimeout(() => {
          this.rData = { ...this.rData, ...this.genData(pageIndex) };
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false
          })
        }, 1000);
      }
    }
  },
  // 滑到页面底部时触发
  onEndReached() {
    // load new data
    console.log('reach end start');
    if(!this.state.isAllLoaded && !this.state.isLoading){
      // 调用父组件传递来的方法
      this.props.getMoreListData()
      this.setState({ isLoading: true })
      this.setState({ isAllLoaded: true })
      console.log('reach end finish');
    }
  },

  render() {
    const { tibeanData } = this.props
    let data = tibeanData.logs
    if (!data || data.length <= 0) {
      return false
    }
    let index = data.length - 1;
    // 定义一个行模板
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      let obj = data[index--];
      let typeSystom = obj.type == 'reward' ? '+' : '-'
      return (
        <div key={rowID} className='taidou-list-item'>
          <i></i>
          <div className='taidou-item-info'>
            <p>{obj.desc}</p>
            <p>{obj.createDatetime}</p>
          </div>
          <span><i>{typeSystom}</i>{obj.tibean}</span>
        </div>
      );
    };
    return (<div style={{ margin: '0 auto', width: '96%' }}>
      <ListView ref="tibeanList"
        dataSource={this.state.dataSource}
        renderFooter={() => <div className="sk-fading-circle" style={{ display: this.state.isLoading?'block':'none' }}>
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>}
        renderRow={row}
        className="tibean-list"
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={40}
        onScroll={() => { console.log('scroll'); }}
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    </div>);
  },
});

class TibeanView extends Component {
  constructor(props) {
    super(props)
    // 初始化state
    this.state = {
      type: 'reward',
      nextPage: '0',
      isNull: false
    }
  }
  // 获取到新数据时触发
  componentWillReceiveProps (nextProps) {
    let tibeanData = nextProps.tibeanData
    // 获取到新数据，更新state
    if (!tibeanData.logs) {
      return false
    }
    if(tibeanData.logs.length == 0 && this.state.nextPage == '0'){
      this.setState({
        isNull: true
      })
    } else {
      this.setState({
        isNull: false
      })
    }
    this.setState({
      nextPage: tibeanData.nextPage
    })
  }
  //  组件构建完成时触发
  componentDidMount() {
    const { dispatch } = this.props
    let type = this.state.type
    let page = this.state.nextPage
    // 获取数据
    dispatch(getUserTibeanAction(type, page))
  }
  // 切换类型
  switchListType (ctype) {
    this.setState({type: ctype,nextPage: '0'}, function () {
        this.getMoreListData()
    });
  }
  // 调用获取数据的action
  getMoreListData () {
    let type = this.state.type
    let page = this.state.nextPage
    this.props.dispatch(getUserTibeanAction(type, page))
  }
  render() {
    let {tibeanData} = this.props
    let allRewardSign = tibeanData.reward != 0 ? '+' : ''
    let allComsumeSign = tibeanData.consume != 0 ? '-' : ''
    let classNames = require('classnames')
    // 设置切换类型按钮绑定的className
    let ioBarLeftClassName = classNames({
      'taidou-io-bar-left': true,
      'active': this.state.type == 'reward'
    })
    let ioBarRightClassName = classNames({
      'taidou-io-bar-right': true,
      'active': this.state.type == 'consume'
    })
    return (
      <div id="tibean">
        <div className="taidou-header">
          <Link to="/tibeanIns" className="taidou-infoBtn">i</Link>
          <div className="taidou-balance">
            <p>余额</p>
            <span>{tibeanData.total}</span>
          </div>
          <div className="taidou-io-bar">
            <div className={ioBarLeftClassName} onClick={this.switchListType.bind(this,'reward')}>
              <p>收入</p>
              <p><span><i>{allRewardSign}</i>{tibeanData.reward}</span></p>
            </div>
            <div className={ioBarRightClassName} onClick={this.switchListType.bind(this,'consume')}>
              <p>支出</p>
              <p><span><i>{allComsumeSign}</i>{tibeanData.consume}</span></p>
            </div>
          </div>
        </div>
        <div className="taidou-list">
          <LIST tibeanData={tibeanData} getMoreListData={this.getMoreListData.bind(this)}/>
          <div className="taidou-list-item-null"  style={{ display: this.state.isNull?'block':'none' }}>
            <img src="../../assets/images/taidou-null.png" />
            <p>吃饭睡觉攒豆豆~</p>
          </div>
        </div>
      </div>
    )
  }
}
// 规定数据类型
TibeanView.propTypes={
  tibeanData:PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
// 获取store数据
const mapStateToProps = (state) => {
  const tibeanData = state.home.tibeanData || []
  return {
    tibeanData
  }
}
export default connect(mapStateToProps)(TibeanView)
