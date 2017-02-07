/**
 * Created by liwei.zhu on 17/1/4.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Router, Route } from 'react-router'
import IndexView from './home/IndexView'
import TibeanView from './home/TibeanView'
import experienceView from './home/experienceView'
import tibeanInsView from './static/tibeanInsView'
import experienceInsView from './static/experienceInsView'
import smxyView from './static/smxyView'
import srlbView from './static/srlbView'
import tdfbView from './static/tdfbView'
import xfdxView from './static/xfdxView'
import '../sass/_base.scss'

class App extends React.Component {
  render(){
    return (
      <div className="application">
        <Router history={this.props.history}>
          <Route path="/" component={IndexView}></Route>
          <Route path="tibean" component={TibeanView}></Route>
          <Route path="experience" component={experienceView}></Route>
          <Route path="tibeanIns" component={tibeanInsView}></Route>
          <Route path="experienceIns" component={experienceInsView}></Route>
          <Route path="smxy" component={smxyView}></Route>
          <Route path="srlb" component={srlbView}></Route>
          <Route path="tdfb" component={tdfbView}></Route>
          <Route path="xfdx" component={xfdxView}></Route>
        </Router>
      </div>
    )
  }
}
export default connect()(App)
