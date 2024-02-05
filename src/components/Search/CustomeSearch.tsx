import React, { type FC, type InputHTMLAttributes } from 'react'
import { SearchContainer } from './style'

const CustomSearch: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
      <SearchContainer>
          <h1>
             Lets search some movie for you😉
          </h1>
          <input type="text" {...props}/>
      </SearchContainer>
  )
}

export default CustomSearch
