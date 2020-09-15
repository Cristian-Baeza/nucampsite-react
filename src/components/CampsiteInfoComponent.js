import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
  //TASK 2
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  //TASK3
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>

          {comments.map((comments) => (
            <div>
              <br />
              {comments.text} <br />
              -- {comments.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comments.date)))}
            </div>
          ))}
        </div>
      );
    }
    return <div></div>;
  }

  render() {
    if (this.props.campsite) {
      return (
        <div class="container">
          <div className="row">
            {this.renderCampsite(this.props.campsite)}

            {this.renderComments(this.props.campsite.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CampsiteInfo;
