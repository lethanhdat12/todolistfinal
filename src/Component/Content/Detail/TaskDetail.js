import React, { Component } from 'react'
import './TaskDetail.scss'
import TaskDetailItem from './TaskDetailItem'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class TaskDetail extends Component {
    render() {
        return (
            <div className="taskdetail">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                               <h3>CHI TIẾT CÔNG VIỆC</h3>
                            </div>
                        </div>
                        <div className="card-body card-bodyDetail">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="detailNameTask">
                                        <h4>Làm giao diện todoList</h4>
                                        <Link to="/">
                                            <button className="btn btn-success btnback"> Quay lại </button>
                                        </Link>
                                        <input type="text" className="form-control Adddetailinput" placeholder="Thêm các bước thực hiện"/>
                                    </div>
                                </div>
                                <div className="col-md-8 detailStep">
                                    <h4>Các bước thực hiện</h4>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Nội dung</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskDetailItem step={1} stepname="Lên ý tưởng"></TaskDetailItem>
                                            <TaskDetailItem step={2} stepname="Phân công công việc cho các bạn"></TaskDetailItem>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
