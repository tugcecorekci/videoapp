import React from "react"
import youtube from "../apis/youtube"

import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onInputSubmit('architecture')
    }

    onInputSubmit = async (searchInput) => {
        const response = await youtube.get('/search/', {
            params: {
                q: searchInput
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <main className="ui container" style={{ margin: '30px 20px' }}>
                <SearchBar onFormSubmit={this.onInputSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default App