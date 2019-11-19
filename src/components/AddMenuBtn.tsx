import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const AddMemoBtn: React.FC = () => {
  return (
    <Button to="/memo/add">New Memo</Button>
  )
}

export default AddMemoBtn;