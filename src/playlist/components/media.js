import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  state = {
    author: 'Andrea'
  }
  //constructor(props) {
    //super(props)
      //this.state = {
  //      author: props.author
  //    }
  //}
  handleClick = (event) => {
    //this.setState({
      //author: 'Andrea Cabrera',
    //})
    //setestate cambia el estado dinamico
    this.props.openModal(this.props);
  }
  render() {
    const styles = {
      container: {
        fontSise: '20px',
        color: '·44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid'
      }
    }
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" 
                src={this.props.cover}
                alt="" width={260} 
                height= {260}/>
        </div>
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.state.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;