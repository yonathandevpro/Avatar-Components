import Avatar from './components/Avatar'
import { useState, useEffect } from 'react'

export default function App () {
    
    const [profilePic, setProfilePic] = useState({});

    useEffect(() => {
        requestProfilePic();
    }, []);

    async function requestProfilePic() {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const [ { picture, name } ] = data.results;
        const { title, first, last } = name;

        
        setProfilePic({
            name: `${title} ${first} ${last}`,
            url: picture.medium
        });

        
    }

   

    return(
        <>
            <h1>Avatar Samples</h1>
            <div className="container">
                <Avatar>YB</Avatar>
                <Avatar src={profilePic.url} alt={profilePic.name}/>
                <Avatar />
             </div>  
        </>
       
        
    );
    
}