import React from 'react'

const Slot = React.forwardRef(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...props, ref })
  }

  return <span {...props} ref={ref}>{children}</span>
})

Slot.displayName = 'Slot'

export { Slot }