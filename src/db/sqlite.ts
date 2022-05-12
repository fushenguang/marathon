import { Knex, knex } from 'knex';

export interface User {
  id: number;
  name: string;
}

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './__database/data.db',
  },
  useNullAsDefault: true,
};

export const knexInstance = knex(config);

export async function initSQLite() {
  try {
    if (await knexInstance.schema.hasTable('users')) return;

    await knexInstance.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('name');
    });
  } catch (error) {
    console.log(error);
  }
}
