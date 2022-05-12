import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { setActiveSort } from '../../Redux/actions/sort'

import '../../Styles/Main/Sort.scss'

export default function Sort({dispatch}) {
  const {sortTypes, activeSortTitle} = useSelector(({sort}) => sort, shallowEqual)

  const sortFunc = (id) => {
    dispatch(setActiveSort(id))
  }
  
  const [isVisible, setVisibility] = React.useState(false)
  const triangle = React.useRef(null)
  
  const clickOutside = (e) => {
    if(e.target.closest('.active-sort-type') == null && e.target.closest('.sort-popup') == null){
      sortPopupHandler()
    }
  }
  
  const sortPopupHandler = () => {
    setVisibility(!isVisible)
  }
  
  React.useEffect(() => {
    if(isVisible){
      triangle.current.innerHTML = "▲"
      document.addEventListener('mouseup', clickOutside)
    } else {
      triangle.current.innerHTML = "▼"
      document.removeEventListener('mouseup', clickOutside)
    }
  }, [isVisible])


  return (
    <div className="sort-container">
        <div className='sort-text'>Сортировать по:</div>
        <div className="sort-choice-container">
            <div className='active-sort-type' onClick={sortPopupHandler}>
              <span className='active-sort-title'>{activeSortTitle}</span>
              <span className='triangle' ref={triangle}>▲</span>
            </div>
            {
              isVisible &&
              <div className='sort-popup'>
                {
                  sortTypes.map((sortType, id) => (
                    <button 
                    key = {id}
                    className={sortType.isActive ? "sort-type selected" : "sort-type"}
                    onClick={() => sortFunc(id)}>
                      {sortType.title}
                    </button>
                  ))
                }
              </div>
            }
        </div>
    </div>
  )
}
