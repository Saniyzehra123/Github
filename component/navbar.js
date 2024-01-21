function navbar(){
    return `<div id="navbar"> 
       <div id="logo">

            <a href="/">

            <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="">

            </a>
       </div>
            
       <div id="search">
            <input type="text" id="username" placeholder="Enter GitHub username">
       </div>
       
       <div id='btn'>
       <button  id="repo_btn" >Get Repositories</button>
     </div>

       <div id="options">

        <ul id="list">


            <li>Pull Requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
          <li>Explore</li>  

        </ul>

    </div>
        <div id="profile">

        <img id="profile-img" src="https://successcampus.in/wp-content/uploads/2018/12/userimg.png" alt="">

         </div>
        </div>
    
    `
}

export default navbar 