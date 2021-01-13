import { types } from './categoryActionTypes';
// import axios from "axios";
import sanityClient from '../../configs/client';
import BlockContent from '@sanity/block-content-to-react';

import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

export const getAllCategories = () => {
    return async (dispatch) => {
        dispatch({
            type: types.CATEGORY_LOADING
        });
        try {
            const data = await sanityClient.fetch(`*[_type=='category']{
            title,
            description,
  			childs[]->{title}
            }`);
            dispatch({
                type: types.CATEGORY_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: types.CATEGORY_FIELD,
                payload: error.message
            });
        }
    };
};
