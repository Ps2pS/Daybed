import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';

function CustomBtn(props) {
  return (
    <div>
      <Button variant="contained" className={props.className} onClick={props.onClick}>
       {props.btnName}
      </Button>
    </div>
  )
}

CustomBtn.propTypes = {

}

export default CustomBtn

