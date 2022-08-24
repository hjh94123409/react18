import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
    }),
    endpoints(build) {
        return {
            register: build.mutation({
                query(user) {
                    return {
                        url: 'auth/local/register',
                        method: 'post',
                        body: user, // username password email
                    }
                },
            }),
        }
    },
})

export const { useRegisterMutation } = authApi
