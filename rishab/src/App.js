import { useEffect, useRef, useState } from "react";
import "./App.css"

function App() {

  const [total, setTotal] = useState(null);
  const [unique, setUnique] = useState(null);
  const [title, setTitle] = useState("");

  const graph = useRef();

  const fetchdata = () => {
    fetch("http://10.100.224.208:3000/get", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(title)
    })
      .then(res => res.json)
      .then(data => {
        setTotal(data.total)
        setUnique(data.unique)
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(graph);
  return (
    <div className="container">
      <input type="text"
        placeholder="Enter tittle"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={fetchdata}>submit</button>

      {total && <div>
        <div className="graph1">
          <div className="outer">
            <div className="inner" ref={graph}>

            </div>
          </div>
        </div>
        <div className="graph2">

        </div>
      </div>}
    </div>
  );
}

export default App;
