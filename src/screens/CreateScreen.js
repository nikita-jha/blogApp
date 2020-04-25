import React, { useContext } from 'react'; 
import { StyleSheet} from 'react-native'; 
import BlogContext from '../context/BlogContext';  
import BlogPostForm from '../components/BlogPostForm'; 

const CreateScreen = ({ navigation }) => {

    const { addBlogPosts } = useContext(BlogContext); 
    return <BlogPostForm 
        initialValues = {{ title: '', content: '' }}
        onSubmit={(title, content) => {
            addBlogPosts(title, content, ()=> navigation.navigate('Index'))
    }}/>

}

const styles = StyleSheet.create({}); 

export default CreateScreen; 