/**
 * Created by liwei.zhu
 * 用户经验值页面
 */
import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ListView } from 'antd-mobile';
import {getUserExperienceAction} from '../../actions'
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
      isAllLoaded: false
    };
  },

  componentDidMount() {
    // you can scroll to the specified position
    // this.refs.lv.refs.listview.scrollTo(0, 200);
  },
  // 接收到新数据
  componentWillReceiveProps (nextProps) {
    // 获取数据
    let experienceData = nextProps.experienceData
    // 检测是否已全部加载完成
    this.setState({
      isAllLoaded: experienceData.nextPage == '-1'? true: false
    })
    // 设置每页项目数
    if(!experienceData.logs){
      return false
    }
    let pageSize = experienceData.logs.length
    this.NUM_ROWS = pageSize
    if(pageSize > 0){
      // 更新ListView数据
      pageIndex++
      setTimeout(() => {
        this.rData = { ...this.rData, ...this.genData(pageIndex) };
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }, 1000)
    }
    
    
  },
  // ListView划到底部时触发
  onEndReached() {
    // load new data
    // if条件防止多次触发
    if(!this.state.isAllLoaded && !this.state.isLoading){
      // 获取更多数据，getMoreListData方法由父组件传来
      this.props.getMoreListData()
      this.setState({ isLoading: true })
      this.setState({ isAllLoaded: true })
    }
  },

  render() {
    // 获取数据
    const { experienceData } = this.props
    let data = experienceData.logs
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
      let typeSystom = obj.type == 'obtain' ? '+' : '-'
      return (
        <div key={rowID} className='taidou-list-item'>
          <i></i>
          <div className='taidou-item-info'>
            <p>{obj.desc}</p>
            <p>{obj.createDatetime}</p>
          </div>
          <span><i>{typeSystom}</i>{obj.experience}</span>
        </div>
      );
    };
    // 返回ListView控件的实例
    return (<div style={{ margin: '0 auto', width: '96%' }}>
      <ListView ref="experienceList"
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
        className="experience-list"
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

class ExperienceView extends Component {
  constructor(props) {
    super(props)
    // 向state中添加页码参数
    this.state = {
      nextPage: '0',
      isNull: false
    }
  }
  // 接收到获取的数据
  componentWillReceiveProps (nextProps) {
    let experienceData = nextProps.experienceData
    // console.log(experienceData)
    // 判断数据是否为空
    if(!experienceData.logs){
      return false
    }
    if(experienceData.logs.length == 0 && this.state.nextPage == '0'){
      this.setState({
        isNull: true
      })
    } else {
      this.setState({
        isNull: false
      })
    }
    // 设置下一页的页码值
    this.setState({
      nextPage: experienceData.nextPage
    })
  }
  componentDidMount() {
    const { dispatch } = this.props
    let page = this.state.nextPage
    // 首次加载完成，获取数据
    dispatch(getUserExperienceAction(page))
  }
  // 获取更多数据方法
  getMoreListData () {
    let page = this.state.nextPage
    this.props.dispatch(getUserExperienceAction(page))
  }
  render() {
    let {experienceData} = this.props
    
    return (
      <div id="tibean">
        <div className="taidou-header" style={{ display: this.state.isNull?'none':'block' }}>
          <Link to="/experienceIns" className="taidou-infoBtn">i</Link>
          <div className="taidou-balance">
            <p>余额</p>
            <span>{experienceData.total}</span>
          </div>
        </div>
        <div className="taidou-list" style={{ display: this.state.isNull?'none':'block' }}>
          <LIST experienceData={experienceData} getMoreListData={this.getMoreListData.bind(this)}/>
        </div>
        <div className="experience-null"  style={{ display: this.state.isNull?'block':'none' }}>
          <img src="../../assets/images/experience-null.png" />
          <p>还没有经验值呢~</p>
        </div>
      </div>
    )
  }
}
// 限定experienceData数据类型
ExperienceView.propTypes={
  experienceData:PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
// 从store中获取初始数据
const mapStateToProps = (state) => {
  const experienceData = state.home.experienceData || []
  return {
    experienceData
  }
}
export default connect(mapStateToProps)(ExperienceView)
