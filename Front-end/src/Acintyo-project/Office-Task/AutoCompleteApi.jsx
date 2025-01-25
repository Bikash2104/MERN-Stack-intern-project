import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Autocomplete  from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function AutoCompleteApi() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState('');
    const[output,setOutput]=useState(null);
    const[ filteredData,setFilteredData]=useState([]);

    useEffect(() => {

        const Fetch = async () => {
            try {
                var res = await axios.get("https://jsonplaceholder.typicode.com/users")
                setResponse(res.data);
                console.log(res.data);
                setFilteredData(res.data)


            } catch (err) {
                console.log(err)
            }
        }
        Fetch();

    }, [])
    const handleChange = (e,value) => {
      
        setOutput(value)

       if(value){
        const filtered = response.filter((item) => item.name === value.name);
        setFilteredData(filtered);
       }else{
        setFilteredData(response)
       }

    }

    console.log(output);

    return (
        <div>
           <Stack sx={{width:300,margin:3}}>
           <Autocomplete
                id="free-solo-demo"
                value={output}
                onChange={handleChange}
                getOptionLabel={(option) => {
                    // console.log(option)
                    return option.name || ""
                }}
                
             
                options={response}
                renderInput={(params) => <TextField {...params} label="Search Employee Name"/>}
            />
           </Stack>



            <TableContainer component={Paper} >
                <Table  sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center' >UserName</TableCell>
                            <TableCell align='center' >Email</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                     {
                        filteredData.length > 0 ?(
                            filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell align='center'>{item.id}</TableCell>
                                    <TableCell align='center'> {item.name} </TableCell>
                                    <TableCell align='center' >{item.username}</TableCell>
                                    <TableCell align='center'>{item.email}</TableCell>
    
                                </TableRow>
                            ))
                        ):(
                            <TableRow>
                                <TableCell colSpan="4">No data</TableCell>
                            </TableRow>
                        )
                     }
                    </TableBody>
                </Table>
            </TableContainer>

        


        </div>
    )
}

export default AutoCompleteApi
