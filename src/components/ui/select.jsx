import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SelectContext = createContext()

const Root = ({ children, onValueChange }) => {
  const [value, setValue] = useState('')

  return (
    <SelectContext.Provider value={{ value, setValue, onValueChange }}>
      {children}
    </SelectContext.Provider>
  )
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
  onValueChange: PropTypes.func,
}

const Trigger = React.forwardRef(({ children, className, ...props }, ref) => {
  const { value } = useContext(SelectContext)
  return (
    <button ref={ref} className={className} {...props}>
      {value || children}
    </button>
  )
})

Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Trigger.displayName = 'SelectTrigger'

const Value = ({ children }) => {
  const { value } = useContext(SelectContext)
  return value || children
}

Value.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
})

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Content.displayName = 'SelectContent'

const Item = React.forwardRef(({ children, className, value, ...props }, ref) => {
  const { setValue, onValueChange } = useContext(SelectContext)
  return (
    <div
      ref={ref}
      className={className}
      onClick={() => {
        setValue(value)
        onValueChange && onValueChange(value)
      }}
      {...props}
    >
      {children}
    </div>
  )
})

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  value: PropTypes.any.isRequired,
}

Item.displayName = 'SelectItem'

const ItemText = ({ children }) => children

ItemText.propTypes = {
  children: PropTypes.node.isRequired,
}

ItemText.displayName = 'SelectItemText'

const ItemIndicator = ({ children }) => {
  const { value } = useContext(SelectContext)
  if (value) return children
  return null
}

ItemIndicator.propTypes = {
  children: PropTypes.node.isRequired,
}

ItemIndicator.displayName = 'SelectItemIndicator'

export { Root, Trigger, Value, Content, Item, ItemText, ItemIndicator }
