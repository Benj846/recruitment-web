import Axios from 'axios';
import React, { useState, useRef } from 'react';

function Career() {
  const [file, setFile] = useState();

  const uplaodHandler = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    Axios.post('/upload', data).then((res) => {
      setFile({ photos: [res.data, ...photos] });
    });
    console.log(event.target.files[0]);
  };
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.append('added text');
  };
  const displaydata = [];
  const [state, setState] = useState({
    showdata: displaydata,
    postVal: ''
  });
  const handleClick = (e) => {
    console.log(e.target.innerText);
    let getTextFrom = e.target.innerText;
    // displaydata.concat(<div>{state.postVal}</div>);
    displaydata.concat({ asdf });
    setState({ showdata: displaydata, postVal: getTextFrom });
  };
  const a = 1;
  a = 41;
  return (
    <div className="career-body">
      <div className="career-main">
        {/* Add component */}
        <form action="" method="post" className="career-form">
          <label htmlFor="file-name"></label>
          <input type="file" />
          <input type="submit" onClick={uplaodHandler} />
        </form>
      </div>

      <p ref={inputEl} className="teset">
        {displaydata}
      </p>
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default Career;
