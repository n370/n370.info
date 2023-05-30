import React from "react";
import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa";

const UnstyledGPG = ({ className }) => {
  const key = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=kwFW
-----END PGP PUBLIC KEY BLOCK-----`;

  const copyKey = () => {
    window.navigator.clipboard.writeText(key).then(
      () => {
        alert("The key has been successfully copied to your clipboard.");
      },
      () => {
        console.error("An error happened copying the key.");
      }
    );
  };
  return (
    <div className={className}>
      <div className="button-wrapper">
        <button type="button" onClick={() => copyKey()}>
          <FaRegCopy />
        </button>
      </div>
      <pre className="key">{key}</pre>
    </div>
  );
};
export default styled(UnstyledGPG)`
  position: relative;
  padding: 1em;
  margin: 1em 0;
  background: #1e1e1e;

  .button-wrapper {
    position: absolute;
    left: 0;
    right: 1em;
    display: flex;
    justify-content: flex-end;
  }

  button {
    border-radius: 3px;
    height: 30px;
    width: 30px;
    color: #939393;
    border: none;
    background: #353535;
    cursor: pointer;
    :hover {
      background: #2b2a2a;
      color: #8f8d8d;
    }
  }

  .key {
    font-size: 8px;
    font-family: monospace;
    color: inherit;
    white-space: pre-wrap;
  }

  @media (min-width: 400px) {
    .key {
      font-size: unset;
    }
  }
`;
