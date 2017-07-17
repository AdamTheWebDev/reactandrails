var Mood = React.createClass({
  propTypes: {
    input: React.PropTypes.text,
    status: React.PropTypes.string,
    output: React.PropTypes.text,

  },
  render: function() {
    var mood = this.props.mood;
    return(
      <tr>
        <td>{mood.input}</td>
        <td>{mood.status}</td>
        <td>{mood.output}</td>

      </tr>
    )
  }
});
