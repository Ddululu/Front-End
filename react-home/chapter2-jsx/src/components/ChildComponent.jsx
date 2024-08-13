import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h3>Chile Component!</h3>
      <img src="images/vite.svg" />
      {/* 반드시 images 폴더는 public 폴더 하위에 생성한다. */}
    </div>
  );
}

export default ChildComponent;