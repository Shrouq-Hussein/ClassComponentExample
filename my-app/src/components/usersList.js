import React from "react"
import axios from 'axios'
import UserCard from "./userCard"
class UsersList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            isLoading: true,
        }
    }
    updateStateCB = (index) => {
    this.state.users.splice(index, 1)
    this.setState({users:this.state.users,...this.state})

    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data)
                this.setState({
                    users: res.data,
                    isLoading: false,

                })
            }
            )
    }
    render() {
        const { users, isLoading } = this.state
        if (isLoading) {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                    {
                        users.map((user,index) => {
                            console.log(user , index)
                            return(
                                <UserCard key={user.id} {...user} index={index} updateStateCB={this.updateStateCB}/>
                            )
                        })
                    }
                    </div>
                </div>

            )
        }
    }


}

export default UsersList