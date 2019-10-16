import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    console.log("HOME: " + this.props.item);
    this.state = {
      getItem: this.props.item
    };
  }
  render() {
    console.log("ITEM: " + this.state.getItem);
    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            w13wf4w56ef1ew3f4w56f
            <br /> 546wfw5e6f4w56f4 <br />
            fvfdd
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            ervreverveverneonvoenveonrverbrtntrbtrtbrtbn5tbbrbrbrveonvonvpornveorvneonvoenvoernvvno
            <br />
            <br />
            <br />
            <br />
            w13wf4w56ef1ew3f4w56f
            <br /> 546wfw5e6f4w56f4 <br />
            fvfdd
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            w13wf4w56ef1ew3f4w56f
            <br /> 546wfw5e6f4w56f4 <br />
            fvfdd
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            w13wf4w56ef1ew3f4w56f
            <br /> 546wfw5e6f4w56f4 <br />
            fvfdd
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
