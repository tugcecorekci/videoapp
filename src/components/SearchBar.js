import React from "react"

class SearchBar extends React.Component {
    state = { searchInput: "" }
    onInputChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.searchInput)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label htmlFor="search" >Video search:</label>
                        <input
                            id="search"
                            type="text"
                            placeholder="enter a keyword here..."
                            value={this.state.searchInput}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar