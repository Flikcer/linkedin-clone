import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Navigate } from "react-router-dom";

function Login(props) {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to our professional community</h1>
          <img src="images/login-hero.svg" alt="login"></img>
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="images/google.svg" alt="google"></img>
            Sign in With Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

//empty styling
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1130px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 35px;
    @media (max-width: 768px) {
      padding: 0.5px;
      text-decoration: none;
    }
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 2px #1e90ff;
  color: steelblue;
  border-radius: 25px;
  transition-duration: 165ms;
  font-size: 20px;
  font-weight: 650;
  line-height: 40px;
  padding: 10px 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.02);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Join = styled.a`
  font-size: 20px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 12px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 140px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 50px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      width: 100%;
      line-height: 2px;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
      padding: 30px;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  border-radius: 28px;
  width: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
    inset 0 0 0 2px rgba(0, 0, 0, 0), inset 0 0 0 1px rgba(0, 0, 0, 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 165ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6),
      inset 0 0 0 2px rgba(0, 0, 0, 0), inset 0 0 0 0.8px rgba(0, 0, 0, 0);
  }
`;

const mapStatetoProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
