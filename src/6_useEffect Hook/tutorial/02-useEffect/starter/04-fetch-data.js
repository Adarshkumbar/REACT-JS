import { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let users = await response.json();
        //Here we get all data
        console.log(users);
        setUsers(users); // this is useState function which changes state value
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Fetch data example</h1>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const {login , id , avatar_url, html_url } = user;
          return (
            <>
              <div >
                <p>{id}</p>
                <p>{login}</p>
                <img
                  src={avatar_url}
                  style={{ width: "50px", borderRadius: "30px" }}
                ></img>
                <p>{html_url}</p>
                <hr />
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
