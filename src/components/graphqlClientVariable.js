import React, { Component } from 'react';

//import the next Apollo Server modules
import gql from "graphql-tag";
import { Query } from "react-apollo";

//import the Post component
import Post from "./post";

//build the query
const GET_IDs = gql`
{
    posts {
      _id
    }
  }
  
`;




class GraphQlClientVariable extends React.Component{
   
    state = {
        id: "",
        disabled: false
    }

  
    changeHandler = (e) =>{
        //set the state to be the value of the option selectd
        //also disable the first options that is not a graphql post id
        this.setState({id: e.target.value, disabled: true});
   }



    render(){
        return (  
        <React.Fragment>    
        <Query query={GET_IDs}>
            {({ loading, error, data }) => {
            if (loading) return "Loading ids...";
            if (error) return `Error! ${error.message}`;

            return (
                <div>
                <h2>Select Post By ID</h2>
                <select name="post" onChange={this.changeHandler}>
                <option disabled = {this.state.disabled} defaultChecked>Select an option</option>
                {data.posts.map(post => (
                    
                    <option key={post._id} value={post._id}>
                    {post._id}
                    </option>
                ))}
                </select>
                </div>
            );
            }}
        </Query>
            <Post id={this.state.id} />
        </React.Fragment>
        );
    }


}
  
  

export default GraphQlClientVariable;
