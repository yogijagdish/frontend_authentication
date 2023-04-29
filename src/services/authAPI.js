// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/register' }),
  endpoints: (builder) => ({
    resgiterAPI: builder.mutation({
      query: (user) => {
        return {
        url:'createuser/',
        method:'POST',
        body: user,
        headers: {
            'content-type': 'application/json'
        }
    }


      },
    }),
    loginAPI: builder.mutation({
        query:(user) => {
            return {
                url: 'login/',
                method: 'POST',
                body: user,
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
    }),
    getUserData: builder.query({
      query:(access_token) => {
        return {
          url: 'profile/',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    changeUserPassword: builder.mutation({
      query: ({newPassword,access_token}) => {
        return {
          url: 'changepassword/',
          method: 'POST',
          body: newPassword,
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    sendUserResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'sendemail/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useResgiterAPIMutation, useLoginAPIMutation,useGetUserDataQuery,useChangeUserPasswordMutation,useSendUserResetEmailMutation } = userAuthApi