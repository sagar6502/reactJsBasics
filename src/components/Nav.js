function Nav(props){
    console.log(props);
    return (

        <nav className="main-nav">
            <div>
                <ol>
                    <li>Home</li>
                    <li>Articles</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
        </nav>
    );
};
export default Nav;