import { useState, useCallback , useEffect} from 'react'
import CheckBox from './Components/CheckBox'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState('')

  let Generate = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstucwxyz'

    if (numAllow) str += '1234567890'
    if (charAllow) str += '$@!&#,`~<>/?'

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPass(pass)
  }, [length, numAllow, charAllow])


  useEffect(() => {
    Generate()
  }, [length, numAllow, charAllow])


  return (
    <div className=' flex flex-col justify-center items-center gap-8 my-24'>
      <h1 className='text-white text-3xl text-center'>Random Password Generator</h1>
      <main className='rounded-xl flex flex-col justify-center items-center gap-4'>

        <div className='top w-full flex justify-center'>
          <input type="text"
            value={pass}
            readOnly
            className='outline-none w-3/5 rounded-lg h-10 p-2 text-lg rounded-r-none' />
          <button className='px-4 py-2 bg-red-800 rounded-md text-white rounded-l-none'>Copy</button>
        </div>

        <div className="bottom w-3/4 flex justify-around">
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-orange-700 text-lg'>Length: {length}</label>
          </div>
          <CheckBox id='Numbers' callback={() => setNumAllow((prev) => !prev)} value={numAllow} />
          <CheckBox id='Characters' callback={() => setCharAllow((prev) => !prev)} value={charAllow} />
        </div>

      </main>
    </div>
  )
}

export default App
