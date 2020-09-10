import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function TableItem(props, index) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <Table
          className="tableList"
          style={{ marginBottom: "0" }}
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th style={{ width: "49px", color: "red", background: "yellow" }}>
                №
              </th>
              <th style={{ width: "184px" }}></th>
              <th style={{ width: "185px" }}></th>
              <th style={{ width: "185px" }}>
                <input
                  id={item.key}
                  value={item.text}
                  onChange={(e) => {
                    props.setUpdate(e.target.value, item.key);
                  }}
                />
              </th>
              <th style={{ width: "131px" }}></th>
              <th style={{ width: "131px" }}></th>
              <th></th>
              <th
                style={{
                  background: "red",
                  width: "117px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  props.deleteItem(item.key);
                }}
              >
                <span>
                  <FontAwesomeIcon className="faIcons" icon="trash" />
                </span>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  });

  return (
    <>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </>
  );
}

export default TableItem;
