import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../Utils/StatusCode';
const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();
  return result;
});

// export const getProducts1 = createAsyncThunk('products/get', async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//     if (!response.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     const data = await response.json();
//     return data;
//     // console.log(data);
//   } catch (error) {
//     // Handle error, e.g., dispatch an action to set an error state
//     console.error('Error fetching products:', error);
//   }
// });

// export function getProducts2() {
//   return async function getProductsThunk(dispatch, getState) {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       console.log(data);
//       dispatch(fetchProducts(data));
//     } catch (error) {
//       // Handle error, e.g., dispatch an action to set an error state
//       console.error('Error fetching products:', error);
//     }
//   };
// }
