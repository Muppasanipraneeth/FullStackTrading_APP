import  { useState } from 'react';
import Landing from "../assets/landing.46a77378.png"
import { TextField, Button, Box, InputAdornment } from '@mui/material';

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number Submitted: +91", mobileNumber);
  };

  return (<>
    <div className='flex w-full ml-32 mt-40 mb-20'>
        <div className='w-1/2 ml-32'>
    <img src={Landing}></img>
        </div>
        <div className='w-1/2 mr-32 '>
        <h1 className='ml-56 text-4xl font-medium m-5'> SignUp Now</h1>
        <h3 className='ml-56 text-xl font-thin m-5'> Or track your existing application </h3>
        <Box display="flex" justifyContent="center" alignItems="center" >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
        <TextField
          id="mobile-number"
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          variant="outlined"
          fullWidth
          required
          inputProps={{ pattern: "[0-9]{10}" }}  // Ensures only a 10-digit number is accepted
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>, // Add +91 before the input
          }}
        />
        <h4> You will receive an OTP on your number</h4>
        <Button type="submit" variant="contained" color="primary" fullWidth>
            Continue
        </Button>
        <h4 className='text-blue-500'>Want to opne NRI account ?</h4>
      </form>
    </Box>
        </div>
    </div>
    <div className='mb-40'>
    <p className='text-l mr-56   ml-60 p-5'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. <span className='text-blue-600'>Please visit </span>  this article to know more.
    </p>
    <p className='text-l   ml-60 p-5'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the  <span className='text-blue-600'>offline forms..</span> For help, <span className='text-blue-600'>click here.</span>

</p>
</div>
   </>
  );
};

export default SignUp;
