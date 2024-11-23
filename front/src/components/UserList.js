import React from 'react';

function UserList({ users }) {
  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
