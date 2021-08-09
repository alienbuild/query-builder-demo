import React, { useState } from "react"
import ReactJson from "react-json-view"

const props = {
  src: null,
  collapsed: false,
  collapseStringsAfter: 15,
  onAdd: true,
  onEdit: true,
  onDelete: true,
  displayObjectSize: true,
  enableClipboard: true,
  indentWidth: 4,
  displayDataTypes: true,
  iconStyle: "triangle"
}

export default function() {
  const {
    collapseStringsAfter,
    onAdd,
    onEdit,
    onDelete,
    displayObjectSize,
    enableClipboard,
    theme,
    iconStyle,
    collapsed,
    indentWidth,
    displayDataTypes
  } = {
    src: null,
    collapsed: false,
    collapseStringsAfter: 15,
    onAdd: true,
    onEdit: true,
    onDelete: true,
    displayObjectSize: true,
    enableClipboard: true,
    indentWidth: 4,
    displayDataTypes: true,
    iconStyle: "triangle"
  }

  const [src, setSrc] = useState({
    stooge: "curly",
    employed: true,
    sauces: ["mustard"],
    toppings: ["mushrooms"],
    favoriteColor: "#00ff00",
    firstName: "Liam",
    lastName: "Franklin"
  })
  const style = {
    padding: "10px",
    borderRadius: "3px",
    margin: "10px 0px"
  }
  return (
    <ReactJson
      name={false}
      collapsed={collapsed}
      style={style}
      theme={theme}
      src={src}
      collapseStringsAfterLength={collapseStringsAfter}
      onEdit={
        onEdit
          ? e => {
              console.log(e)
              this.setState({ src: e.updated_src })
            }
          : false
      }
      onDelete={
        onDelete
          ? e => {
              console.log(e)
              this.setState({ src: e.updated_src })
            }
          : false
      }
      onAdd={
        onAdd
          ? e => {
              console.log(e)
              this.setState({ src: e.updated_src })
            }
          : false
      }
      displayObjectSize={displayObjectSize}
      enableClipboard={enableClipboard}
      indentWidth={indentWidth}
      displayDataTypes={displayDataTypes}
      iconStyle={iconStyle}
    />
  )
}
