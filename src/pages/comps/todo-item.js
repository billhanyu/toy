import React from 'react';
import PropTypes from 'prop-types';

/**
 * TodoItem
 */
class TodoItem extends React.Component {
  /**
   * constructor - description
   *
   * @param  {type} props description
   */
  constructor(props) {
    super(props);
  }

  /**
   * handleDelete - description
   */
  handleDelete() {
    // 获取父组件传递过来的 date
    const date = this.props.date;
    // 执行父组件的 delete 方法
    this.props.onDeleteItem(date);
  }

  /**
   * render - description
   * @return {React.Component}
   */
  render() {
    return (
      <div className="todoItem">
        <p>
          <span className="itemCont">{ this.props.content }</span>
          <span className="itemTime">{ this.props.date }</span>
          <button className="delBtn" onClick={this.handleDelete.bind(this)}>
            <img className="delIcon" src="/images/delete.png" />
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  date: PropTypes.string,
  content: PropTypes.string,
  onDeleteItem: PropTypes.func,
};

export default TodoItem;
