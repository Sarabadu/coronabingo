import classnames from 'classnames'
import { useState } from 'react'

export default function Cells({ numbers }) {
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const toggleNumber = number => {
    const nextState = [...selectedNumbers]
    const index = nextState.findIndex(n => n === number)

    if (index !== -1) {
      nextState.splice(index, 1)
    } else {
      nextState.push(number)
    }

    setSelectedNumbers(nextState)
  }

  const handleClick = number => {
    if (number) {
      toggleNumber(number)
    }
  }

  return numbers.map((number, i) => (
    <div
      key={i}
      className={classnames([
        'border-b-2 border-r-2 border-gray-900 flex h-20 items-center justify-center p-1 relative',
        number ? 'bg-white cursor-pointer' : 'bg-yellow-200',
        selectedNumbers.includes(number) ? 'bg-orange-400' : null
      ])}
      onClick={() => {
        handleClick(number)
      }}
      style={{ width: 'calc(100% / 9)' }}
    >
      <div
        className={classnames(
          ['absolute bottom-0 left-0 m-2 right-0 top-0 z-0'],
          selectedNumbers.includes(number) ? 'poroto' : null
        )}
        style={{
          transform: `rotate(${number + i}deg)`
        }}
      ></div>
      <span className="font-medium font-oswald relative text-2xl sm:text-5xl text-shadow-white z-10">
        {number || ''}
      </span>
    </div>
  ))
}