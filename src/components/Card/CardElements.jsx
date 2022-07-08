import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  /* overflow: hidden; Este me estaba cortando la imagen */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  border: solid #ccc;
  border-width: 3px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 20px lightgray;
  transition: 1s;

  &:hover {
    /*height: min-content; transition no acepta min-content...*/
    height: 300px;
    /* Var.Ef.1  
     .imgBx {
      transform: scale(1);
    } */
  }

  .imgBx {
    position: absolute;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    /* Var.Ef.1  transition: 0.5s;  */
  }

  /* CONTENT */

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
  }

  .content .details {
    padding: 40px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    transform: translateY(100px);
  }

  &:hover .content .details {
    transform: translateY(0px);
  }

  .content .details h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #555;
    line-height: 1.2rem;
  }

  .content .details h2 span {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
  }

  .content .details .data {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .content .details .data h3 {
    font-size: 1em;
    color: #555;
    line-height: 1.2em;
    font-weight: 600;
  }

  .content .details .data h3 span {
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.5;
  }

  .content .details .actionBtn {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .content .details .actionBtn button {
    padding: 7px 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    background: #ff5f95;
    color: #fff;
    cursor: pointer;
  }

  .content .details .actionBtn button:nth-child(2) {
    border: 1px solid #999;
    color: #999;
    background: #fff;
  }
`;
