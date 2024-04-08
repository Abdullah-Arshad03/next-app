import React from "react";
import Link from "next/link";
const UserTable = async () => {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h4>Following are the Users!</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name"> Name </Link>
            </th>

            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
