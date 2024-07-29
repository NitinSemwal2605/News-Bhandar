import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar';
import NewsMain from "./NewsMain";

export default class NewsSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
    this.loadingBar = React.createRef(); // Reference for the loading bar
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews();
    }
  }

  fetchNews = async () => {
    const { category } = this.props;
    const url = `https://inshortsapi.vercel.app/news?category=${category}`;

    this.setState({ loading: true });
    this.loadingBar.current.continuousStart(); // Start the loading bar

    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      this.setState({ articles: parsedData.data, loading: false });
      this.loadingBar.current.complete(); // Complete the loading bar
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
      this.loadingBar.current.error(); // Handle errors
    }
  }

  render() {
    const { articles } = this.state;

    return (
      <>
        <LoadingBar
          color="#FFFFFF"
          shadow={true}
          ref={this.loadingBar} // Attach the ref
        />
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.id}>
              <NewsMain
                title={element.title ? element.title.slice(0, 180) : ""}
                description={element.content ? element.content.slice(0, 130) : ""}
                imgurl={element.imageUrl ? element.imageUrl : ""}
                NewsUrl={element.readMoreUrl}
                date={element.date}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
