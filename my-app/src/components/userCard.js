import React from "react";
import { Component } from "react";
import { Button ,Card ,CardBody, CardText, CardTitle , CardSubtitle} from 'reactstrap';
import './userCard.css'
class UserCard extends Component {
    removeComponentHandler = () =>{
        console.log("delete",this.props.index)
        this.props.updateStateCB(this.props.index)
    }
    render() {
        const{name ="no available name",username="no available username",email="no available email",address={},phone="no available phone",website="no available website",company ={}} = this.props

        return (
            
            <Card
            
            className="col-3 m-2 p-2"
                color="primary"
                outline
                style={{
                    width: '18rem'
                }}
            >
                <div  className="myCrd">
                <img
                    className="userProfilePic"
                    alt="Sample"
                    src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
                />
                </div>
               
                <CardBody>
                    <CardTitle tag="h5">
                        {username}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {name}
                    </CardSubtitle>
                    <CardText>
                        {`email : ${email}`}
                    </CardText>
                    <CardText>
                        {`address : ${address.street}-${address.city}`}
                    </CardText>
                    <CardText>
                        {`phone : ${phone}`}
                    </CardText>
                    <CardText>
                        {`company name : ${company.name}`}
                    </CardText>
                    <CardText>
                        {`website : ${website}`}
                    </CardText>
                    <Button color="danger" onClick={this.removeComponentHandler}>
                        Delete
                    </Button>
                </CardBody>
            </Card>
        )
    }
}
export default UserCard