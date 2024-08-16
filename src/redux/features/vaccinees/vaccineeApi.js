import { baseApi } from '../../api/baseApi';

export const vaccineeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ['vaccinees'],
    getVaccinees: builder.query({
      query: () => ({
        url: '/vaccinees/',
        method: 'GET',
      }),
      providesTags: ['vaccinees'],
    }),
    createVaccinee: builder.mutation({
      query: (data) => ({
        url: '/vaccinees/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['vaccinees'],
    }),
    deleteVaccinee: builder.mutation({
      query: (id) => ({
        url: `/vaccinees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vaccinees'],
    }),
  }),
});

export const { useGetVaccineesQuery, useCreateVaccineeMutation } = vaccineeApi;
