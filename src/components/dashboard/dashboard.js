import { useEffect, useState } from "react";
import { Col ,Row, Container ,Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = ( ) =>{
    const [users, setUsers] = useState([]);
    const navigate =useNavigate();
    
    const fetchUsers =async()=>{
            try{
                const response = await fetch("http://localhost:5000/api/user");
                const data = await response.json();
                setUsers(data);
            }catch(error){
                console.error("error while fetching details :", error.message);
            }
        }

    useEffect(()=>{
        fetchUsers();
    }, []);

    const handleUpdate = (userId)=>{
        navigate(`/user/${userId}`);
    }

    const handleDelete =async (userId) =>{
       try{
        const response = await fetch(`http://localhost:5000/api/user/${userId}`,{
            method:"DELETE"
       });
        if(response.ok){
            fetchUsers();
        }
       }catch(error){
        console.error("Error while deleting user :", error.message);
       }
    }
    
    return(
        <>
          <Container className="mt-5">
            <Row>
                <Col>
                <h1 className="text-center"> Dashboard</h1>
                <Table striped bordered hover responsive> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                          {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                onClick={() => handleUpdate(user._id)}
                                            >
                                                Update
                                            </Button>{" "}
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                </Col>
            </Row>
          </Container>
        </>
    );
};

export default Dashboard;