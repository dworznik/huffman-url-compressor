# Huffman-URL-Compressor-for-Nodejs
## Author: Mariano L. Acosta

# Description
Convert any kind of String into a url-friendly parameter using Huffman Encoding.

# Installation

        npm install --save huffman-url-compressor

# Usage

## Parameters:

- **Train (string)**: Training set used to create the encoder. This is where the algorithm gets the frequency for each char. 
- **Test (string)**: String that you want to encode.

## Example:

        import {createEncoder, encodeConfig, decodeConfig} from 'huffman-url-compressor';

        //create encoder

        let Encoder = createEncoder(train);

        //create a base64 encoded stream

        let encodedParam = encodeConfig(test,Encoder)
        
        //retrieve the original param 

        let decodParam= decodeConfig(encodedParam,Encoder)

