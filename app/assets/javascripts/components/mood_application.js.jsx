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
  handleSearch: function(moods) {
    this.setState({ moods: moods });
  },
  handleAdd: function(mood) {
    var moods = this.state.moods;
    moods.push(mood);
    this.setState({ moods: moods });
  },


  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Mood Music</h1>
          <p>Adam Roberts</p>
        </div>
        <div className="row">
       <div className="col-md-4">
         <SearchForm handleSearch={this.handleSearch} />
       </div>
       <div className="col-md-8">
          <NewForm handleAdd={this.handleAdd} />
        </div>
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
