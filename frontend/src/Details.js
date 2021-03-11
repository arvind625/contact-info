import { React, useEffect, useState, useRef } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Details = () => {
  const currentRef = useRef();
  const history = useHistory();
  const [messageStatus, setMessageStatus] = useState(null);
  const [messageSent, setMessageSent] = useState(null);

  const handleMessage = () => {
    // history.push("/message");
    setMessageStatus(true);
    setTimeout(() => {
      setMessageStatus(false);
      setMessageSent(true);
    }, 10000);
  };
  const handleClose = () => {
    setMessageSent(false);
  };
  const handleOutsideClick = (e) => {
    if (!currentRef?.current?.contains(e.target)) setMessageSent(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedouwn", handleOutsideClick);
    };
  }, []);
  return (
    <div className="h-screen relative">
      <Card
        style={{
          opacity: messageStatus || messageSent ? 0.3 : 1,
        }}
      >
        <Card.Body>
          <Card.Title>{history.location.state.fullName}</Card.Title>
          <Card.Subtitle
            style={{
              marginBottom: "100px",
            }}
          >
            {history.location.state.phoneNumber}
          </Card.Subtitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "50%",
            }}
          >
            <Button variant="primary" onClick={handleMessage}>
              Send Message
            </Button>
            <Button variant="primary" onClick={history.goBack}>
              Choose Another Person
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
      <br />
      {messageStatus ? (
        // Message Sending Card
        <div className="flex align-center justify-center">
          <Card
            style={{
              width: "480px",
              height: "400px",
              background: "#21de60a8",
              position: "absolute",
              zIndex: 2,
              display: "inline-block",
              top: "10px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ marginBottom: "100px" }}>
                {`Sending SMS to ${history.location.state.fullName}...`}
              </Card.Title>
              {/* <Card.Subtitle></Card.Subtitle> */}
              <br />
              <ProgressBar animated now={100} />
            </Card.Body>
          </Card>
        </div>
      ) : messageSent ? (
        <div className="flex align-center justify-center" ref={currentRef}>
          <Card
            tabIndex="0"
            onBlur={handleClose}
            style={{
              width: "400px",
              height: "100px",
              background: "#21de60a8",
              position: "absolute",
              zIndex: 2,
              display: "inline-block",
              top: "60px",
            }}
          >
            <Card.Body>
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <Card.Title style={{ marginBottom: "20px" }}>Hey!</Card.Title>
              <Card.Subtitle>
                {`SMS successfully sent to ${history.location.state.fullName}`}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
};
