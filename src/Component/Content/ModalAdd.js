import React, { Component } from 'react'
import Axios from 'axios'
export default class ModalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tencongviec: null,
            anhcongviec: null,
            dayS: null,
            dayE: null,
            trangthai: null,
            file: null,
            img: null,
        }
        this.nameButton="";
    }
    nameChange = (e) => {
        this.setState({ tencongviec: e.target.value });
    }
    daySChange = (e) => {
        this.setState({ dayS: e.target.value });
    }
    dayEchange = (e) => {
        this.setState({ dayE: e.target.value });
    }
    stateChang = (e) => {
        if (e.target.value === 'Đã hoàn thành') {
            this.setState({ trangthai: 1 });
        } else {
            this.setState({ trangthai: 2 });
        }
    }
    imgChange = (e) => {
        let files = e.target.files[0];
        this.setState({ anhcongviec: files['name'] });
        this.setState({ file: e.target.files[0] });
        this.setState({ img: URL.createObjectURL(e.target.files[0]) });
    }
    handleAddtask = () => {
        let { file, img, ...rest } = this.state;
        this.props.addTask(rest);
        this.handleUploadFile(file);
        this.props.hideModal();
    }
    handleUploadFile = (files) => {
        let formData = new FormData();
        formData.append('avatar', files);
        Axios.post(`${this.props.pathUrl}post/uploadFile.php`, formData)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }
    handelTotal = ()=>{
        if(this.props.click){
            this.props.click();
        }else{
            this.handleAddtask();
        }
    }
    setValue = (objValue)=>{
        this.setState({tencongviec : objValue['tencongviec']});
        this.setState({dayS : objValue['dayS']});
        this.setState({dayE : objValue['dayE']});
        this.setState({trangthai : objValue['trangthai']});
        this.setState({anhcongviec : objValue['anhcongviec']});
    }
    render() {
        let { img } = this.state;
        if(this.props.click){
            this.nameButton = "Chỉnh sửa nhiệm vụ";
        }else{
            this.nameButton = "Thêm nhiệm vụ";
        }
        let image = null;
        if (img === null) {
            image = <img src="/image/camera.png" alt="" className="AddshowImage" />;
        } else {
            image = <img src={img} alt="" className="AddshowImage" />;
        }
        return (
            <div className="modalAdd">
                <div className="overlay" onClick={this.props.hideModal}>
                </div>
                <div className="modalAddMain">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                <h3> {this.nameButton} </h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group row">
                                <label htmlFor="Addtencongviec" className="col-sm-4 col-form-label">Tên công việc</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Addtencongviec" placeholder="tên công việc"  onChange={this.nameChange} value={this.state.tencongviec} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="AdddayS" className="col-sm-4 col-form-label">Ngày bắt đầu</label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control" id="AdddayS" onChange={this.daySChange} value={this.state.dayS} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="AdddayE" className="col-sm-4 col-form-label">Ngày kết thúc</label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control" id="AdddayE" onChange={this.dayEchange} value={this.state.dayE}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <select name="sort" id="sort" className="custom-select mr-sm-2" onChange={this.stateChang}>
                                    <option defaultValue="0">Loại</option>
                                    <option defaultValue="1">Đã hoàn thành</option>
                                    <option defaultValue="2">Chưa hoàn thành</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="image" className="col-sm-4 col-form-label ">
                                    {image}
                                </label>
                                <div className="col-sm-8">
                                    <input type="file" className="form-control" id="image" onChange={this.imgChange} />
                                </div>
                            </div>
        <button className="btn btn-success" id="addCongviec" onClick={this.handelTotal}>{this.nameButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
