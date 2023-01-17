import styled from 'styled-components';

export const Container = styled.div`
/* Spinner */
.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  
/* Title */
    h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #D0D2EC;
        font-family: 'monaco', 'Consolas', 'Lucida Console', monospace;
    }

    h2 {
        font-size: 1rem;
        text-align: left;
        color: white;
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
    }

    h3 {
        font-size: 1.1rem;
        text-align: left;
        color: #E5EAF7;
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
        margin: 10px 0px 5px 0px;
    }

    /* Text box and send button */
    input[type="text"] {
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
        font-size: 0.8rem;
        width: 75%;
        padding: 4px 4px;
        margin: 4px 0;
        box-sizing: border-box;
        border: 1px solid #28499B;
        border-radius: 4px;
        color: #28499B;
    }

    button[type="submit"] {
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
        font-size: 0.8rem;
        width: 25%;
        background-color: #E5EAF7;
        color: #28499B;
        padding: 4px 4px;
        margin: 4px 0;
        border: 1px solid #28499B;
        border-radius: 4px;
        cursor: pointer;
    }

    /* Divs */
    .error {
        width: 100%;
        padding: 12px 0;
        margin: 1px 0;
        box-sizing: border-box;
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
        text-align: left;
        font-size: 1rem;
        color: #E96F6F;
    }

    .response {
        width: 100%;
        padding: 12px 0;
        margin: 1px 0;
        box-sizing: border-box;
        text-align: center;
        font-family: "Euclid Circular B", Roboto, Helvetica, Arial, sans-serif;
        text-align: left;
        font-size: 1rem;
        color: white;
    }

    .loading {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        text-align: center;
        font-size: 18px;
        color: white;
        justify-content: top;
        flex-direction: column;
        align-items: center;
    }

    padding: 1rem;
    min-width: 350px;
    min-height: 400px;
    display: flex;
    justify-content: top;
    flex-direction: column;
    // align-items: center;
    border: 1px solid #050344;

    color: white;
    background: rgb(0,0,0);
    background: linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(5,3,68,1) 2%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 69%, rgba(1,9,50,1) 98%, rgba(0,0,0,1) 100%);

    & > h1 {
        margin-bottom: 1rem;
    }
`;
