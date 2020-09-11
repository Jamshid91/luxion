import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function TableList(props) {
  const items = props.items;
  const listItems = items.map((item, index) => {
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
                {index + 1}
              </th>
              <th style={{ width: "181px" }}></th>
              <th style={{ width: "181px" }}></th>
              <th style={{ width: "165px" }}>
                <input
                  style={{ width: "150px" }}
                  id={item.key}
                  value={item.text}
                  onChange={(e) => {
                    props.setUpdate(e.target.value, item.key);
                  }}
                />
              </th>
              <th style={{ width: "120px" }}>
                <input style={{ width: "110px" }} onChange={(e) => {}} />
              </th>
              <th style={{ width: "120px" }}></th>
              <th style={{ width: "123px" }}></th>
              <th
                style={{
                  background: "red",
                  width: "110px",
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

export default TableList;
