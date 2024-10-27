import React from "react";
import "./TableShimmer.css"; 

const TableShimmer = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => (
      <tr key={index} className="shimmer-row">
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
        <td className="shimmer-cell">
          <div className="shimmer-box"></div>
        </td>
      </tr>
    ));
};

export default TableShimmer;
