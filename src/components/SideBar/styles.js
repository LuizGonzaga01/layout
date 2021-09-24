import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
  
    align-items: center;
  
    max-width: 15rem;
    width: 100%;
    height: 100%;
    padding: 2rem;
  
    background: var(--blue);
  
    .logo {
      display: flex;
      align-items: center;
      padding: 0 0 0 18px;
    }
  
    .text {
      padding: 10px;
    }
  
    .text1 {
      font-size: 0.7rem;
    }
  
  
    .navbar {
  
      position: absolute;
      left: 3%;
      top: 150px;
      bottom: 43.3%;
      font-size: 0.8rem;
      list-style: none;
      font-family: "Poppins", Arial, sans-serif;
      line-height: 3rem;
      cursor: pointer;
  
  
      span {
        margin-right: 15px;
  
      }
  
      li {
        opacity: 50%;
  
        &:hover {
          opacity: 100%;
          color: #fff;
        }
      }
    }
  `;