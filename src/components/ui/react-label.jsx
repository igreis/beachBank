import React from 'react'

const Root = React.forwardRef(({ className, ...props }, ref) => {
  return <label ref={ref} className={className} {...props} />
})

Root.displayName = 'Label'

export { Root }