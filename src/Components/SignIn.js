import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function SignIn() {
  const [modal,setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button onClick={toggle}></Button>
    </div>
  )
}
