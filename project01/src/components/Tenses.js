import React from "react";
import { Link } from "react-router-dom";

function Tenses() {
  return (
    <div>
      <h1>12 Tenses dalam Bahasa Inggris</h1>
      <ul>
        <li>
          <button>
            <Link to="/simple-present" style={{ textDecoration: "none", color: "inherit" }}>
              1. Simple Present Tense
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/present-continuous" style={{ textDecoration: "none", color: "inherit" }}>
              2. Present Continuous Tense
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tenses;
