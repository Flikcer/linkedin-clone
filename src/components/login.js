import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
      </Nav>
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
    media-query (max-width: 768px;) {
      padding: 0.5px;
    }
  }
`;
export default Login;
