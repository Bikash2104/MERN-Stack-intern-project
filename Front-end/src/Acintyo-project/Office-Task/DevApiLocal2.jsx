// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';



// function DevApiLocal() {

//     const [response, setResponse] = useState([]);
//     const [select, setSelect] = useState({});
//     const [search,setSearch]=useState('')
//     const [filteredData,setFilteredData]=useState([])


//     useEffect(() => {
//         const FetchData = async () => {
           
//             try {
//                 const ResponseData = await axios.get("http://devapi.thelocal.co.in/b2b/api-product/product/b2b/search/supplier/AL-S202309-756/all?productName=dolo")
//                 setResponse(ResponseData.data)
//                 setFilteredData(ResponseData.data)
//                 console.log(ResponseData.data)
//             } catch (err) {
//                 console.log(err)

//             }
//             // handleChange();

//         }
//         FetchData();
       

//     }, [])
   

//     const handleInputChange = async (e, value) => {
//         setSearch(e.target.value);
//         setSelect(value);
//         if (value) {
//           try {
//             const ResponseData = await axios.get(`http://devapi.thelocal.co.in/b2b/api-product/product/b2b/search/supplier/AL-S202309-756/all?productName=${value}`)
           
//             setFilteredData(ResponseData.data)
//           } catch (err) {
//             console.log(err)
//           }
//         } else {
//           setFilteredData(response)
//         }
//       }

//     return (
//         <div>

//             <Stack sx={{ width: 300, margin: 2 }}>
//                 <Autocomplete
//                     id="free-solo-demo"
//                     onInputChange={handleInputChange}
                  

//                     getOptionLabel={(option) => {

//                         return option.productSearch || ""
//                     }}

//                     options={response}
//                     renderInput={(params) => <TextField {...params} label="Search Medicine" />}
//                 />
//             </Stack>

//             <TableContainer >
//                 <Table sx={{ minWidth: 650 }}>
//                     <TableHead sx={{ backgroundColor: "primary.main" }} >
//                         <TableRow>
//                             <TableCell align='center'>Product Id</TableCell>
//                             <TableCell align='center'>ProductSearch</TableCell>
//                             <TableCell align='center'>Store Id</TableCell>
//                             <TableCell align='center' >Price</TableCell>
//                             <TableCell align='center' >Quantity</TableCell>

//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {
//                             filteredData.length > 0 ? (
//                                 filteredData.map((item) => (
//                                     <TableRow key={item.id}>
//                                         <TableCell align='center'>{item.productId}</TableCell>
//                                         <TableCell align='center'> {item.productSearch} </TableCell>
//                                         <TableCell align='center'> {item.storeId} </TableCell>
//                                         <TableCell align='center' >{item.price}</TableCell>
//                                         <TableCell align='center'>{item.quantity}</TableCell>

//                                     </TableRow>
//                                 ))
//                             ) : (
//                                 <TableRow>
//                                     <TableCell colSpan="4">No data</TableCell>
//                                 </TableRow>
//                             )
//                         }
//                     </TableBody>
//                 </Table>
//             </TableContainer>


//         </div>
//     )
// }

// export default DevApiLocal