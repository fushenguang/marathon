export const createUser = async (params: { name: string }) => {
  try {
    const { name = 'your name' } = params || {};
    console.log('name', name);
    const user = await window.electron.knex.insert('users', {
      name,
    });

    console.log('insert successfully.', user);
  } catch (error) {
    console.log('insert failed: ' + error);
  }
};

export const queryAllUsers = async () => {
  try {
    return await window.electron.knex.where('users');
  } catch (error) {
    console.log('insert failed: ' + error);
  }
};
