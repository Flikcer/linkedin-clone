import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="logo"></img>
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="images/search-icon.svg" alt="search"></img>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="images/nav-home.svg" alt="home"></img>
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="images/nav-network.svg" alt="network"></img>
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="images/nav-jobs.svg" alt="jobs"></img>
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="images/nav-messaging.svg" alt="messaging"></img>
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="images/nav-notifications.svg" alt="notif"></img>
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="user" />
                ) : (
                  <img src="images/user.svg" alt="user" className="padMe"></img>
                )}
                <span>Me</span>
                <img src="images/down-icon.svg" alt="down"></img>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a href>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img
                  src="images/nav-work.svg"
                  alt="work"
                  className="padMe"
                ></img>
                <span>Work</span>
                <img src="images/down-icon.svg" alt="down"></img>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: relative;
  top: 0;
  width: 100vw;
  z-index: 10;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  padding: 5px;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: (0, 0, 0, 0.9);
      width: 220px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
  width: 18px;
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid rgba(0, 0, 0, 0.9);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &.active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }

  .padMe {
    padding-top: 10px;
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 88px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 40px;
  padding-bottom: 10px;
  font-size: 16px;
  transition-duration: 165ms;
  text-align: center;
  display: none;

  @media (max-width: 768px) {
    top: -45px;
    width: 65px;
    font-size: 0.5rem;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 768px) {
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

const mapStatetoProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
