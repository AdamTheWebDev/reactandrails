var MoodTable = React.createClass({
  render: function() {
    var moods = [];
    this.props.moods.forEach(function(mood) {
    moods.push(<Mood mood={mood} key={'mood' + mood.id}/>);
 }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">input_url</th>
            <th className="col-md-2">status</th>
            <th className="col-md-3">output</th>

          </tr>
        </thead>
        <tbody>{moods}</tbody>
      </table>
    )
  }
});
