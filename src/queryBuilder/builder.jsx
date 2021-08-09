import React, { Component } from "react"
import {
  Query,
  Builder,
  Utils
} from "react-awesome-query-builder"
import throttle from "lodash/throttle"
import loadedConfig from "./config"
import loadedInitValue from "./init_value"

const stringify = JSON.stringify
const {
  // jsonLogicFormat,
  queryString,
  mongodbFormat,
  sqlFormat,
  getTree,
  checkTree,
  loadTree,
  uuid
} = Utils

const preStyle = {
  backgroundColor: "darkgrey",
  margin: "10px",
  padding: "10px"
}
const emptyInitValue = { id: uuid(), type: "group" }
const initValue =
  loadedInitValue && Object.keys(loadedInitValue).length > 0
    ? loadedInitValue
    : emptyInitValue


export default class QueryBuilder extends Component {
  state = {
    tree: checkTree(loadTree(initValue), loadedConfig),
    config: loadedConfig
  }

  render = () => (
    <div>
      <Query
        {...loadedConfig}
        value={this.state.tree}
        onChange={this.onChange}
        renderBuilder={this.renderBuilder}
      />
      <div className="query-builder-result">
        {this.renderResult(this.state)}
      </div>
    </div>
  )

  renderBuilder = props => (
    <div className="query-builder-container" style={{ padding: "10px" }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  )

  onChange = (immutableTree, config) => {
    this.immutableTree = immutableTree
    this.config = config
    this.updateResult()
    // const jsonTree = getTree(immutableTree) //can be saved to backend
  }

  updateResult = throttle(() => {
    this.setState({ tree: this.immutableTree, config: this.config })
  }, 100)

  renderResult = ({ tree: immutableTree, config }) => {
    // const { logic, data, errors } = jsonLogicFormat(immutableTree, config)
    return (
      <div>
        <br />
        <div>
          stringFormat:
          <pre style={preStyle}>
            {stringify(queryString(immutableTree, config), undefined, 2)}
          </pre>
        </div>
        <hr />
        <div>
          humanStringFormat:
          <pre style={preStyle}>
            {stringify(queryString(immutableTree, config, true), undefined, 2)}
          </pre>
        </div>
        <hr />
        <div>
          sqlFormat:
          <pre style={preStyle}>
            {stringify(sqlFormat(immutableTree, config), undefined, 2)}
          </pre>
        </div>
        <hr />
        <div>
          mongodbFormat:
          <pre style={preStyle}>
            {stringify(mongodbFormat(immutableTree, config), undefined, 2)}
          </pre>
        </div>
        {/* <hr />
        <div>
          <a href="http://jsonlogic.com/play.html" target="_blank">
            jsonLogicFormat
          </a>
          :
          {errors ? (
            <pre style={preErrorStyle}>{stringify(errors, undefined, 2)}</pre>
          ) : (
            <pre style={preStyle}>
              Rule:
              <br />
              {stringify(logic, undefined, 2)}
              <br />
              <hr />
              Data:
              <br />
              {stringify(data, undefined, 2)}
            </pre>
          )}
        </div> */}
        <hr />
        <div>
          Tree:
          <pre style={preStyle}>
            {stringify(getTree(immutableTree), undefined, 2)}
          </pre>
        </div>
      </div>
    )
  }
}
