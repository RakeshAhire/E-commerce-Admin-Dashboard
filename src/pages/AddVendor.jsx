import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Box, useColorModeValue, FormControl,FormLabel } from "@chakra-ui/react";

function AddVendor() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        img: "",
        phone: "",
        address: "",
        city:"",
        pincode:"",
        state:"",
        password:"",

    });

    const handleSubmit = async (event) => {
        console.log(formData)
        event.preventDefault();
        try {
            const response = await axios.post("https://erin-tough-viper.cyclic.app/vendor/register", formData);
            console.log("Response from server: ", response.data);
            
        } catch (error) {
            console.error("Error posting data: ", error);
        }
      
    };

    const handleChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <Box
            maxW={'lg'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            m={"auto"}
            p={8}>
            <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.phone}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Image</FormLabel>
                <Input type="file" accept="image/*" name="img" onChange={handleChange} border={"none"} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Address</FormLabel>
                <Input name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>City</FormLabel>
                <Input name="city" placeholder="City" onChange={handleChange} value={formData.city} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>State</FormLabel>
                <Input name="state" placeholder="State" onChange={handleChange} value={formData.state} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Pincode</FormLabel>
                <Input name="pincode" placeholder="Pincode" onChange={handleChange} value={formData.pincode} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Password</FormLabel>
                <Input name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            </FormControl>
            <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
        </Box>
    );
}

export default AddVendor;