import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


function DevApiLocal() {

    const [response, setResponse] = useState([]);
    const [search,setSearch]=useState('')
    const [filteredData,setFilteredData]=useState([])

    useEffect(() => {
        const FetchData = async () => {
           
            try {
                const ResponseData = await axios.get(`http://devapi.thelocal.co.in/b2b/api-product/product/b2b/search/supplier/AL-S202309-756/all?productName=${search}`)
                setResponse(ResponseData.data)
                setFilteredData(ResponseData.data)
                console.log(ResponseData.data)
            } catch (err) {
                console.log(err)
            } 
        }
      FetchData();
       

    }, [search])
   

    const handleInputChange = async (e, value) => {
        setSearch(value);     
      }

    return (
        <div>

            <Stack sx={{ width: 300, marginTop:3 ,marginLeft:9,marginBottom:4}}>
                <Autocomplete
                    id="free-solo-demo"
                    onInputChange={handleInputChange}
                    getOptionLabel={(option) => {
                        return option.productSearch || ""
                    }}
                    options={response}
                    renderInput={(params) => <TextField {...params} label="Search Medicine" />}
                />
            </Stack>

            <TableContainer >
                <Table sx={{ maxWidth:1200,border:"2px solid blue" }} align="center">
                    <TableHead sx={{ backgroundColor: "primary.main" }} >
                        <TableRow>
                            <TableCell sx={{fontSize:20,fontWeight:"bold"}} align='center'>Product Id</TableCell>
                            <TableCell sx={{fontSize:20,fontWeight:"bold"}} align='center'>ProductSearch</TableCell>
                            <TableCell sx={{fontSize:20,fontWeight:"bold"}} align='center'>Store Id</TableCell>
                            <TableCell sx={{fontSize:20,fontWeight:"bold"}} align='center' >Price</TableCell>
                            <TableCell sx={{fontSize:20,fontWeight:"bold"}} align='center' >Quantity</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor:"gainsboro"}}>
                        {
                            filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell align='center'>{item.productId}</TableCell>
                                        <TableCell align='center'> {item.productSearch} </TableCell>
                                        <TableCell align='center'> {item.storeId} </TableCell>
                                        <TableCell align='center' >{item.price}</TableCell>
                                        <TableCell align='center'>{item.quantity}</TableCell>

                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell align='center' sx={{fontSize:25,fontWeight:"bold"}} colSpan="5">No data</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DevApiLocal

