import Knex from "knex";

export async function up(knex: Knex) {
  //Criação da tabela
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("tittle").notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("items");
}
