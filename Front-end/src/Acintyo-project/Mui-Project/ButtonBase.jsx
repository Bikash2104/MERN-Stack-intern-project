import ButtonBase from '@mui/material/ButtonBase';

export default function  CustomButton() {
  return (
    <ButtonBase
      onClick={() => console.log('Button clicked')}
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
      }}
    >
      Click me
    </ButtonBase>
  );
}
