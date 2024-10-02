import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Sidebar.css";


const SideBar = () => {



    return (
        <div className='sideBarDiv'>
            {/* start code */}
            <Sidebar>
                <Menu>
                    <MenuItem > Dashboard </MenuItem>
                    <SubMenu label="Classes">
                        <MenuItem> List Class </MenuItem>
                        <MenuItem> View Class </MenuItem>
                    </SubMenu>
                    <SubMenu label="Trainers">
                        <MenuItem>List Trainer</MenuItem>
                        <MenuItem>View Trainer</MenuItem>
                    </SubMenu>
                    <SubMenu label="Students">
                        <MenuItem>List Student</MenuItem>
                        <MenuItem>View Student</MenuItem>
                    </SubMenu>
                    <MenuItem> Log Out </MenuItem>
                </Menu>
            </Sidebar>;
            {/* end code */}
        </div>
    )
}
export default SideBar