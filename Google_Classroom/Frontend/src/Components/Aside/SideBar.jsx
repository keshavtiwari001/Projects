import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Sidebar.css";


const SideBar = () => {



    return (
        <div className='sideBarDiv'>
            {/* start code */}
            <Sidebar>
                <Menu>
                    <SubMenu label="Register/Login">
                        <MenuItem> <Link to='/signup'>Sign up</Link> </MenuItem>
                        <MenuItem> <Link to='/login'>Log in</Link> </MenuItem>
                    </SubMenu>

                    <MenuItem>
                        <Link to='/dashboard'>Dashboard</Link>
                    </MenuItem>

                    <SubMenu label="Classes">
                        <MenuItem> <Link to='/listclass'>List Class</Link> </MenuItem>
                        <MenuItem> <Link to='/viewclass'>View Class</Link> </MenuItem>
                    </SubMenu>
                    <SubMenu label="Trainers">
                        <MenuItem><Link to='/listtrainer'>List Trainers</Link></MenuItem>
                        <MenuItem><Link to='/viewtrainer'>View Trainer</Link></MenuItem>
                    </SubMenu>
                    <SubMenu label="Students">
                        <MenuItem><Link to='/liststudent'>List Students</Link></MenuItem>
                        <MenuItem><Link to='/viewstudent'>View Student</Link></MenuItem>
                    </SubMenu>
                    <MenuItem> Log Out </MenuItem>
                </Menu>
            </Sidebar>;
            {/* end code */}
        </div>
    )
}
export default SideBar