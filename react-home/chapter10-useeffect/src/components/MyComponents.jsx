import React from 'react';
import { useEffect } from 'react';

const MyComponents = () => {
  useEffect(() => {
    return () => {
      console.log("Unmount...");
    }
  })
  return (
    <div>
      <h3>짝수입니다.</h3>
    </div>
  );
};

export default MyComponents;