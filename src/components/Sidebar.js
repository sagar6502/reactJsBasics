export default function Sidebar() {
    const aSideStyle = {
        background:"azure",
        width:"calc(30%-10px)",
        marginleft:"10px",
    }

    return(
        <aside
            style={aSideStyle}
            className="sidebar-component">
                <h2>SidebarContent here</h2>
        </aside>
    )
}