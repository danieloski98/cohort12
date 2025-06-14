import { useState, useEffect } from 'react'
import Button from './components/button'
import Form from './Form';

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This code runs after the component mounts
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
    // setIsLoading(false);
    // This code runs when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, [page]); // Empty dependency array means this effect runs once on mount

  const handleClick = () => {
    setIsLoading(true);
    setPage(page + 1);
    console.log(`New page value -> ${page}`);
  };

  const handleClickWithValue = (value: number) => {
    console.log(value);
  }

  return (
    <div>
      {/* {!isLoading ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
      <Button title="Go to Next Page" onClick={handleClick} />
      <Button title="Go to Next Page" onClick={() => handleClickWithValue(10)} /> */}
      <Form />
    </div>
  );
}

export default App
