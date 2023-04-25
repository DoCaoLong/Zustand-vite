import { useEffect } from "react";
import "./App.css";
import { useCountStore } from "./store/store-count";
import { useUsers } from "./store/store-users";

function App() {
  const { count, inCrease, deCrease } = useCountStore((state) => state);
  const { users, loading, fetchUsers } = useUsers((state) => state);
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <button onClick={() => deCrease()}>-</button>
        <button>{count}</button>
        <button onClick={() => inCrease()}>+</button>
      </div>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {users.length > 0 &&
            users.map((item) => <li key={item}>{item.title}</li>)}
        </ul>
      )}
    </>
  );
}

export default App;
