import styled from 'styled-components';

export const TestimonialWrap = styled.div`

  .testimonial-wrap {
    width: 100%;
    height: auto;
  }
`
export const TestimonialCard = styled.div`

  .card {
    background-color: #2E2639;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 2.344rem;
    margin-bottom: 1.9rem;

    @media only screen and (min-width: 997px) {
      padding: 3rem;
      max-width: 390px;
      padding-top: 2.51298rem;
      margin: 0 auto;
      margin-top: 0.831rem;
      width: 80%;
    }

    div {
      color: #F2F2F2;
    }

    p {
      color: #E0E0E0;
      text-align: center;
    }
  }

  .card-quote {
    margin-bottom: 0.8931rem;
  }

  .test-avatar {
    margin-top: 0.98727rem;
    margin-bottom: 0.98727rem;
    padding: 1rem;
    border-radius: 50%;
    width: 59px;
    height: 59px;

  }


  .card.one {

    .test-avatar.one {
      background: url('../../../images/dami.jpg');
      background-size: cover;
      background-position: center center;
    }
  }

  .card.two {
    display: none;
  }

  .card.three {
    display: none;
  }

  .avatar-title {
    font-weight: 700;

    p {

      :first-child {
        margin-bottom: 8px;
      }

      :last-child {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }
`
export const DotsWrap = styled.div`
  width: 100%;

    @media only screen and (min-width: 997px) {
      width: 100%;
    }

  .greenm-dots {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 2rem;



    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin: 0 5px;
      padding: 0;
    }

    .greenm-active {
      border: 4px solid #F2F2F2;
      width: 20px;
      height:20px;
      border-radius: 50%;
    }

    button {
      position: relative;
      background-color: #4B4A53;
      background-position: center;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: none;
    }
  }
`
