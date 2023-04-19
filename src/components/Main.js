import styled from "styled-components";
import PostModal from "./PostModal";
import { useState } from "react";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("closed");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="user"></img>
          <button onClick={handleClick}>Share a post</button>
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
      <div>
        <Article>
          <SharedActor>
            <a href>
              <img src="images/user.svg" alt="user"></img>
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="dots" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a href>
              <img src="/images/shared-image.jpg" alt="shared" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt="thumbs"
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                  alt="clap"
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a href>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like-icon.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="comment" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
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
  margin: 0 0 8px;
  background-color: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      min-height: 48px;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-left: 1rem;
      span {
        margin-left: 5px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 5px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #0a66c2;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 97%;
    height: 97%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.33;
  display: flex;
  align-items: start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      background-color: transparent;
      border: none;
      img {
        padding: 1px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding-left: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
  button {
    background-color: transparent;
    border: none;
    display: inline-flex;
    align-items: center;
    padding: 6px;
    color: #0a66c2;
    span {
      margin-left: 4px;
    }

    @media (min-width: 768px) {
      margin-left: 4px;
    }
  }
`;

export default Main;
