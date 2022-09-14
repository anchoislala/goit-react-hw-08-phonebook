import List from '@mui/material/List';

export default function FolderList({children}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto'}}>
          {children}
    </List>
  );
}