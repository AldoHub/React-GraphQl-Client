import React, { Component } from 'react';

//import the next Apollo Server modules
import gql from "graphql-tag";
import { Query } from "react-apollo";


const GET_POST = gql`
  query Post($id: String!) {
   post(_id: $id) {
    _id
    name
    description
    }
  }
`;


//remember to pass the props as arguments
//into the functional component
//get the id from the props you are passing
const Post = (props) => {
    if(props.id == ""){
      return <p className="nothing">nothing to show, select an ID from the list</p>;

    }else{
      return (
      <Query query={GET_POST} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        console.log(data.post);
      
        return (
          <div className="post">
            <h3>{data.post.name}</h3>
            <p>{data.post.description}</p>
          </div>
        );
      }}
    </Query>
      )
    }
    
    


 
};
  
  

export default Post;
