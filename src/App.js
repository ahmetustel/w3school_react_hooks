import { useState, useEffect } from 'react'

const App = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('component did update');
  });

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
    </div>
  )
}

export default App