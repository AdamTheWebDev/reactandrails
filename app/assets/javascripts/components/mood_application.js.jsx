var EventApplication = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Mood Music</h1>
          <p>Adam Roberts</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MoodTable />
          </div>
        </div>
      </div>
    )
  }
});
