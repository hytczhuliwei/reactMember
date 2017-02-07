/**
 * Created by liwei.zhu
 * 说明协议页面
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import '../../sass/_smxy.scss'

class smxyView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="smxy">
        <p> 感谢您访问泰笛的会员计划，本计划由泰笛(上海)网络科技股份有限公司（以下简称“泰笛”）提供。以上会员计划条款和条件，连同与计划有关的任何促销内容，构成泰笛会员体系的完整内容。在预订和使用泰笛提供的相关服务前，请您务必仔细阅读并透彻理解本会员体系的各项条款，以便您能全面了解双方的权利和义务。如对本会员体系内容有任何疑问，您可向泰笛客服人员详询。阅读本会员体系的过程中，如果您不同意本会员体系或其中任何内容，您可选择停止预定泰笛提供的相关服务。如果您预订和使用泰笛相关服务，将被视为接受和同意遵从这些条款及其更新，泰笛保持最终解释权。</p>
        <h2>1、协议的变更</h2>
        <p>泰笛有可能修改、变更本会员体系，对体系条款的修改、变更将被包含在泰笛更新后的条款中。泰笛修改、变更的内容是可分割的，如果任何修改、变更内容被认定为无效、部分无效或因任何原因不可执行，不影响其它条款的有效性或可执行性。一旦《泰笛用户会员体系》的内容发生变动，泰笛将会直接在APP上公布修改之后的《泰笛用户会员体系》，该公布行为视为泰笛已经通知您修改内容。泰笛也可通过其他适当方式向您提示修改内容。如该等修改、变更造成您在本《泰笛用户会员体系》下权利的实质减少，您可以选择停止使用泰笛向您提供的服务；在该种情况下，若您仍然继续使用泰笛的服务的，即表示同意受经修订的本《泰笛用户会员体系》的约束。如您停止接受泰笛的服务，请及时注销您的账户或拨打泰笛客服热线4008-123-923，由客服人员协助您办理注销手续。</p>
        <h2>2、终止</h2>
        <p>如果您在泰笛的账户被关闭，那么您也将丧失您的会员资格及泰豆计划。</p>
        <h2>3、隐私</h2>
        <p>泰笛不会向任何第三方提供，出售，出租，分享和交易您的个人信息，除非第三方和泰笛一起为您提供服务，并且在该服务结束后，将被禁止访问包括其以前能够访问的所有这些资料。当泰笛被法律强制或依照政府要求提供您的信息时我们将善意地披露您的资料。</p>
        <p>最后，您是唯一对您的账号和密码信息负有保密责任的人。任何情况下，请小心妥善保管。</p>
      </div>
    )
  }
}
export default connect()(smxyView)