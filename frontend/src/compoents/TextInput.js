import React from 'react'
import { TextField, Button } from '@mui/material';

function TextInput({ message, setMessage, handleSendMessage, handleCompositionStart, handleCompositionEnd, handleKeyDown }) {
    return (
      <div className='text-input'>
        <TextField 
          autoComplete='off' 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    );
}

export default TextInput
  