import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://avante.biz/wp-content/uploads/Waterfall-HD-Wallpapers/Waterfall-HD-Wallpapers-037.jpg" alt="nature" />
        <Post src="https://www.nastol.com.ua/pic/201502/2560x1600/nastol.com.ua-128293.jpg" alt="flowers" />
      </div>
    )
  }
}