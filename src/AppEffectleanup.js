import React, { useState } from 'react'
import Child from './Child'

const AppEffectCleanup = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      React app
      <input
        type="text"
        name="name"
        id="name"
        onChange={e => setValue(e.target.value)}
        placeholder="Bir seyler yazin"
      />
      <br />
      Input value:
      { value }
      {
        value.length < 4 ? <Child /> : null
      }
    </div>
  )
}

export default AppEffectCleanup