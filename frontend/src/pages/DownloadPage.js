import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../utils/actions';
import { useNavigate } from 'react-router-dom';

function DownloadPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setData(name,newName, email));
    // Redirect to payment page
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name}  />
      <input type="text" name="newName" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default DownloadPage;
