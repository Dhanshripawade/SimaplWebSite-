import React from 'react'
import Button from 'react-bootstrap/Button';

function Design() {
  return (
    <div className='container gap-2'>
    <div className='mt-5 '>
        <div>
            <h2>What do you need designed?
            </h2>
        </div>
        <div className='mt-3 p-3 mx-1'>
      <Button variant="info p-3 mx-1" >Logo & Identify</Button>
      <Button variant="info p-3 mx-1">Web & App Design</Button>
      <Button variant="info p-3 mx-1">Business & Adevertising</Button>
      <Button variant="info p-3 mx-1">Clothing & Merchendise</Button>
      <Button variant="info p-3 mx-1">Art & illustration</Button>
      <Button variant="info p-3 mx-1">Packaging & Label</Button>
      <Button variant="info p-3 mx-1">Book & Magzine</Button>
      {/* <Button variant="rgb(1,161,193)">Dark</Button> */}
      {/* <Button variant="link">Link</Button> */}
      </div>

    </div>
    </div>
  )
}

export default Design