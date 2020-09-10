import React from "react";
import { Table } from "react-bootstrap";

const TableItem = () => {
  return (
    <>
      <Table style={{ marginBottom: "0" }} striped bordered hover>
        <thead>
          <tr>
            <th
              style={{
                width: "40px",
              }}
            >
              №
            </th>
            <th
              style={{
                width: "170px",
              }}
            >
              Категория
            </th>
            <th
              style={{
                width: "170px",
              }}
            >
              Суб-категория
            </th>
            <th
              style={{
                width: "170px",
              }}
            >
              Имя продукта
            </th>
            <th
              style={{
                width: "120px",
              }}
            >
              Тип
            </th>
            <th
              style={{
                width: "120px",
              }}
            >
              Покуп
            </th>
            <th
              style={{
                width: "120px",
              }}
            >
              Продаж
            </th>
            <th
              style={{
                width: "70px",
              }}
            >
              Операции
            </th>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default TableItem;
