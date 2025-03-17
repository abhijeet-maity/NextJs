import React from 'react'

function PrivateContent() {
  return (
    <div>
        <h1>You cannot view this in the browser</h1>
        <p>Its a Private folder not meant for the routing</p>
    </div>
  )
}

//http://localhost:3000/_lib -> Page not Found
export default PrivateContent;