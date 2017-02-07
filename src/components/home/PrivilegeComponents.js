/**
 * Created by liwei.zhu on 16/12/29.
 */
import React from 'react';
import { Link } from 'react-router'

// 等级特权项组件
class PrivilegeComponents extends React.Component {
  render() {
    // 获取传递的参数
    const { item } = this.props
    let url = ''
    var imgHtml
    if (item['name'] == '泰豆翻倍') {
      imgHtml = <span>X{item.multiple}</span>
    } else {
      imgHtml = <img src={item.logoImg}/>
    }
    if(item['name'] == '泰豆抽奖'){
      return false
    }
    // 指定url
    switch (item['name']) {
      case '泰豆翻倍':
        url = '/tdfb'
        break
      case '消费抵现':
        url = '/xfdx'
        break
      case '生日礼包':
        url = '/srlb'
        break
      default:
        break;
    }
    return (
      <div className="memberRight-right-item">
        <Link to={url}>
          <div className="memberRight-right-image">
            {imgHtml}
          </div>
          <p className="memberRight-right-title">{item.name}</p>
        </Link>
      </div>
    )
  }
}

export default PrivilegeComponents
