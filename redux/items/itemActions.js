import { types } from './itemTypes';
// import axios from "axios";
import sanityClient from '../../configs/client';
// import BlockContent from '@sanity/block-content-to-react';

// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

export const getAllItems = () => {
    return async (dispatch) => {
        dispatch({
            type: types.ITEM_LOADING
        });
        try {
            const data = await sanityClient.fetch(`*[_type=='product']{
            title,
            slug{
                current
            },
            image{
                asset->{
              _id,
              url
             }
            },
        }`);
            dispatch({
                type: types.ITEM_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: types.ITEM_FAILED,
                payload: error.message
            });
        }
    };
};
