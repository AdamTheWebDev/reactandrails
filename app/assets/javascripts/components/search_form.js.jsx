var SearchForm = React.createClass({
  handleSearch: function() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/api/moods/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  },
  render: function() {
    return(
      <input_url onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             ref="query" />
    )
  }
});
