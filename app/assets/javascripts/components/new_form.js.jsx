var NewForm = React.createClass({
  propTypes: {
    input_url: React.PropTypes.string,
    status: React.PropTypes.string,
    output: React.PropTypes.string,

  },
  getInitialState: function() {
    return {
      input_url: '',
      output: '',
      status: '',

    }
  },
  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/moods',
        method: 'POST',
        data: { event: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState(self.getInitialState());
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    if (this.state.input_url && this.state.output &&
        this.state.status) {
      return true;
    } else {
      return false;
    }
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="input_url"
                 placeholder="input_url"
                 ref="input"
                 value={this.state.input_url}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="status"
                 placeholder="status"
                 ref="status"
                 value={this.state.status}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="output"
                 placeholder="output"
                 ref="output"
                 value={this.state.output}
                 onChange={this.handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
});
