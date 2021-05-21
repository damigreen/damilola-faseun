import styled from 'styled-components';

export const TestimonialWrap = styled.div`

  .testimonial-wrap {
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
  }
`
export const TestimonialCard = styled.div`

  .card {
    background-color: #2E2639;
    max-width: 360px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    padding-top: 2.51298rem;
    border-radius: 8px;

    div {
      color: #F2F2F2;
    }

    p {
      color: #E0E0E0;
      /* line-height: 25px; */
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
    /* width: 400px;
    height: auto; */
  }

  .card.three {
    display: none;
    /* width: 400px;
    height: auto; */
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
