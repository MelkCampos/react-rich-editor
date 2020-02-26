import React, { useState } from 'react'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHTmlPhase from 'react-html-parser'

import { Title, Editor } from './styles'

function App() {

  const [ value, setValue ] = useState("")

  const handleOnChange = (event, editor) => {

    // Testing if it is saving
    // console.log(editor.getData())

    const data = editor.getData()
    setValue(data)
  }

  return (
      <>

          <Title>ARTICLE</Title>

        <Editor>
          
          <CKEditor 
              editor={ClassicEditor}
              onChange={handleOnChange}
            />
        </Editor>

          { ReactHTmlPhase(value) }
      </>
      ) 
}

export default App