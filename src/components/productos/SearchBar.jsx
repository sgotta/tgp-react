import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    // eslint-disable-next-line react/prop-types
    const { onFilterTextChange } = this.props;
    onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    // eslint-disable-next-line react/prop-types
    const { onInStockChange } = this.props;
    onInStockChange(e.target.checked);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-sm-4">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Productos
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  role="img"
                  aria-label="Emoji de lupa"
                  className="input-group-text"
                >
                  🔍
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Search..."
                value={filterText}
                onChange={this.handleFilterTextChange}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
                checked={inStockOnly}
                onChange={this.handleInStockChange}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Only show products in stock
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
