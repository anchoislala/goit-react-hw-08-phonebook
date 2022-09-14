import Box from '@mui/material/Box';

export default function BoxSx({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: 5,
        textAlign: 'center',
        margin: 'auto',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 300,
        backgroundColor: 'primary.dark',
        borderRadius: 8,
        '&:hover': {
          backgroundColor: 'yellow',
        },
      }}
    >
      {children}
    </Box>
  );
};
