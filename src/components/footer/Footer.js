import React from 'react';

//ES6 syntax for defining functions
export default () => {
  const style={
    textAlign:"center",
    bottom:'0px',
    background:'#FFF',
    position:'fixed'
  };
  return (
      <div id="footer" style={style}>
		    Copyright &copy; 2016 Frip App, LLC All Rights Reserved
		</div>
  );
}
