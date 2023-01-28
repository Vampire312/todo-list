import React from 'react'

const ListItem = ( {title} ) => {
    
  return (
    <>
        <div className="listItem">
            <p>{title}</p>
            <div className="options">
                <div className="edit">📝</div>
                <div className="delete">❎</div>
            </div>
        </div>
    </>
  )
}

export default ListItem