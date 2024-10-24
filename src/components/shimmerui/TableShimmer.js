import React from "react";

const TableShimmer = () => {
  return Array(12)
    .fill(0)
    .map((_) => (
      <tr>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
        <td style={{ padding: "12px", textAlign: "left" }}>
          <div
            style={{
              background: "rgb(232, 223, 223)",
              width: "11vw",
              height: "4vh",
            }}
          ></div>
        </td>
      </tr>
    ));
};

export default TableShimmer;
