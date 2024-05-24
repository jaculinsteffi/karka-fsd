import React from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const params = useParams();
  

  return (
    <>
      <p>{params.id}</p>
    </>
  );
};

export default View;
 