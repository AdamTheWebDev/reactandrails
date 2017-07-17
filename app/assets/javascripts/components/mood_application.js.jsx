var MoodApplication = React.createClass({
  getInitialState: function() {
    return { moods: [] };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: '/api/moods',
      success: function(data) {
        self.setState({ moods: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },


  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Mood Music</h1>
          <p>Adam Roberts</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MoodTable moods={this.state.moods}/>
          </div>
        </div>
      </div>
    )
  }
});
