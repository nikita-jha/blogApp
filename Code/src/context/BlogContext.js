import React, { useState } from 'react';
import jsonServer from '../api/jsonServer'; 

const BlogContext = React.createContext(); 

export const BlogProvider = ({ children }) => {

    const[blogPosts, setBlogPosts] = useState([]); 

    const getBlogPosts = async () => {
            const response = await jsonServer.get('/blogposts');
            setBlogPosts(response.data)
            //response.data === [{blogPost1}, {blogPost2}, {blogPost3}]
        
    }
    
    const addBlogPosts = async (title,content, callback) => {
        await jsonServer.post('/blogposts', {title, content})
        setBlogPosts([...blogPosts, { 
            id: Math.floor(Math.random() * 99999), 
            title: title,
            content: content }])
            if(callback) {
                callback(); 
            }
        }

    const editBlogPost = async (id, title, content, callback) => {

        await jsonServer.put(`/blogposts/${id}`, {title, content})
        setBlogPosts(blogPosts.map((blogPost) => {
            if(blogPost.id === id){
                return {id, title, content}
            }else{
                return {title: blogPost.title, content: blogPost.content, id: blogPost.id, }; 
            }
        }))
        if(callback) {
            callback(); 
        }

    }

    const deleteBlogPost = async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        setBlogPosts(blogPosts.filter(blogPost => blogPost.id !== id))
    }


    return <BlogContext.Provider value={{ data: blogPosts, addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts}}>
        {children}
    </BlogContext.Provider>
}; 

export default BlogContext; 

//children is a prop that passes text into a custom component. It allows us to create a component
//that can accept another component as an argument which can be shown inside of BlogProvider. 
//In this case children basically has <App/> inside it.

//the ... sytnax is when we set the blog posts to a new array. The first thing we put in the new
//array is the ... meaning fill the new one with all pre-exising values and then comma with 
//a new object representing the added blog post. Dollar sign curly braces lets us put our own
//value

//When handling different types of data: comments, images, texts, we are going to be using a 
//different approach than the one used above