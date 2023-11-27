import { useState } from 'react'
import Header  from './components/Header'


// eslint-disable-next-line react/prop-types

  function List() {
    const students = ['Muhammad Ruhiyat', 'Muhammad Ruhiyat2', 'Muhammad Ruhiyat3']
    return(
    <>
    <ul>
      {students.map((student)=>
        <li key={student}>{student}</li>
        )}
      </ul>
    </>
    );
  }

  function Button()
  {
    const [likes, setLikes] = useState(0);
    function handleClick() {
      setLikes(likes + 1 );
    }
    return(<>
    <button onClick={handleClick}>Like {likes}</button>
    </>);
  }

function App() {

    return(
        <>
       <Header author="Muhammad Ruhiyat" />
       <List />
       <Button/>
     

        </>
      );
}

export default App
