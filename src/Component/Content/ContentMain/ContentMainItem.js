import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import changeToSlug from '../../ChangeSlug';
import ModalAdd from '../ModalAdd';
export default class ContentMainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit : false,
        }
    }
    
    editTask = ()=>{
        this.setState({showModalEdit : !this.state.showModalEdit}); 
        this.props.showModalEdit();
    }
    hideModalEdit = ()=>{
        this.setState({showModalEdit : !this.state.showModalEdit}); 
    }
    handleAddtask = ()=>{
        console.log('editTaskItem');
    }
    render() {
        let check = this.props.trangthai;
        let trangthai = null;
        let classTranghai = null;
        let element = null;
        let title = new changeToSlug(this.props.tieude).ChangeToSlug();
        if (check === 1) {
            trangthai = 'Hoàn thành';
            classTranghai = 'hoanthanh';

            element = <span className={classTranghai}> {trangthai}</span>
        } else {
            trangthai = 'Chưa hoàn thành';
            classTranghai = 'chuahoanthanh';
            element = <span className={classTranghai}> {trangthai}</span>
        }
        let modal = <></>;
        let {showModalEdit} = this.state;
        if(showModalEdit){
            modal = <ModalAdd 
            hideModal = {this.hideModalEdit}
            ></ModalAdd>
        }else{
            modal = <></>;
        }
        return (
            <tr>
                <th scope="row">{this.props.stt}</th>
                <td>{this.props.tieude}</td>
                <td className="imageTask">
                    <img src={"/image/" + this.props.hinhanh} alt="" className="img img-fluid" />
                </td>
                <td>{this.props.dayStart}</td>
                <td>{this.props.dayEnd}</td>
                <td>
                    {element}
                </td>
                <td>
                    <button className="btn btn-danger btnAction" onClick={this.props.showModal}>Xóa</button>
                    <button className="btn btn-success btnAction" onClick = {this.editTask}>Sửa</button>
                    <Link to={"/detail/" + title + "/" + this.props.showLink}>
                        <button className="btn btn-warning btnAction">...</button>
                    </Link>
                </td>
                {
                    modal
                }
            </tr>
        )
    }
}
