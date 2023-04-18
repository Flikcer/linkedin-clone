import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="user"></img>
          <button>Share a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-i.svg" alt="icon"></img>
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="video" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="article" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: bottom;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.2);
  margin: 0 0 0 8px;
  background-color: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      min-height: 48px;
      background-color: transparent;
    }
  }
`;

export default Main;
