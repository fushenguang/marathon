import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { createUser, queryAllUsers } from './service';

interface User {
  id: string;
  name: string;
}

export const InterviewRecords = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleCreateUser = async () => {
    await createUser({
      name,
    });

    await queryAllUsers().then((users) => {
      setUsers(users);
    });
  };

  useEffect(() => {
    queryAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <section>
      <Input value={name} onChange={(e) => setName(e.target.value)} />

      <Button onClick={handleCreateUser}>Create User</Button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};
