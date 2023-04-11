import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon  from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
export default function Sidebar() {
  return (
    <Container>
        <Header>
          <UserAvatar />
          <IconsContainer>
              <IconButton>
                <ChatIcon/>
              </IconButton>
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
          </IconsContainer>
        </Header>
        <Search>
          <SearchIcon/>
          <SearchInput placeholder="Search in chats"/>
        </Search>
        <SidebarButton> Start a new chat </SidebarButton>

        {/*List of chats* */}
    </Container>
  )
}

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const Search = styled.div`
  display: flex;
  align-items:center;
  border-radius: 2px;
  padding: 15px;
`
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  padding: 6px 0;
  font-size: 1rem;
`
const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }

`
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``