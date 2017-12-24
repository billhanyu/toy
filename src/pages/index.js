import React from 'react';
import $ from 'jquery';
import TodoList from './comps/todo-list';

/**
 * Todo
 */
class Todo extends React.Component {
  /**
   * constructor - description
   * @param  {type} props description
   */
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      showTooltip: false, // 控制 tooltip 的显示隐藏
    };
  }

  /**
   * hooks
   */
  componentDidMount() {
    // 获取所有的 todolist
    this._getTodoList();
  }

  /** 获取 todolist
   */
  _getTodoList() {
    const that = this;
    $.ajax({
      url: '/getAllItems',
      type: 'get',
      dataType: 'json',
      success: (data) => {
        const todoList = that.todoSort(data);
        that.setState({
          todoList,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /** 添加 todo
   * @param {type} newItem new item
   */
  _onNewItem(newItem) {
    const that = this;
    $.ajax({
      url: '/addItem',
      type: 'post',
      dataType: 'json',
      data: newItem,
      success: (data) => {
        const todoList = that.todoSort(data);
        that.setState({
          todoList,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /** 删除 todo
   * @param {type} date the Date
   */
  _onDeleteItem(date) {
    const postData = {
      date: date,
    };
    $.ajax({
      url: '/deleteItem',
      type: 'post',
      dataType: 'json',
      data: postData,
      success: (data) => {
        this._getTodoList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /** 对 todolist 进行逆向排序（使新录入的项目显示在列表上面）
   * @param {type} todoList todo list
   * @return {type} return something
   */
  todoSort(todoList) {
    todoList.reverse();
    return todoList;
  }

  /** 提交表单操作
   * @param {event} event event
   */
  handleSubmit(event) {
    event.preventDefault();
    // 表单输入为空验证
    if (this.contentRef.value == '') {
      this.contentRef.focus();
      this.setState({
        showTooltip: true,
      });
      return;
    }
    // 生成参数
    let newItem={
      content: this.contentRef.value,
      date: (new Date().getMonth() +1 ) + '/'
      + new Date().getDate() + ' '
      + new Date().getHours() + ':'
      + new Date().getMinutes() + ':'
      + new Date().getSeconds(),
    };
    // 添加 todo
    this._onNewItem(newItem);
    // 重置表单
    this.formRef.reset();
    // 隐藏提示信息
    this.setState({
      showTooltip: false,
    });
  }

  /**
   * render - description
   * @return {type}  description
   */
  render() {
    return (
      <div className="container">
      <h2 className="header">Todo List</h2>
      <form
        className="todoForm"
        ref={(el) => this.formRef = el}
        onSubmit={ this.handleSubmit.bind(this) }
      >
      <input
        ref={(el) => this.contentRef = el}
        type="text"
        placeholder="Type content here..."
        className="todoContent"
      />
      { this.state.showTooltip &&
        <span className="tooltip">Content is required !</span>
      }
      </form>
      <TodoList
        todoList={this.state.todoList}
        onDeleteItem={this._onDeleteItem.bind(this)}
      />
      </div>
    );
  }
}

export default Todo;
