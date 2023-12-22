import { api } from "../apiSlice";

const coursesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data: any) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["courses"],
    }),
    editCourse: builder.mutation({
      query: ({ data, courseId }) => ({
        url: `/courses/edit-course/${courseId}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["courses"],
    }),
    // for admin
    getAllCourse: builder.query({
      query: () => ({
        url: "/courses/get-all-courses",
        credentials: "include",
      }),
      providesTags: ["courses"],
    }),
    deleteCourse: builder.mutation({
      query: (courseId: any) => ({
        url: `/courses/delete-course/${courseId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["courses"],
    }),
    // get course datail without content
    getSingleCourse: builder.query({
      query: (courseId: any) => ({
        url: `/courses/get-course/${courseId}`,
        credentials: "include",
      }),
      providesTags: ["courses"],
    }),
    getUserAllCourse: builder.query({
      query: () => ({
        url: "/courses/get-courses",
        credentials: "include",
      }),
      providesTags: ["user-courses"],
    }),
    getCourseDetails: builder.query({
      query: (courseId) => ({
        url: `/courses/get-course/${courseId}`,
        credentials: "include",
      }),
      providesTags: ["courses"],
    }),
    // with content after purchase
    getCourseContent: builder.query({
      query: (courseId) => ({
        url: `/courses/get-course-content/${courseId}`,
        credentials: "include",
      }),
      providesTags: ["courses", "course-details"],
    }),
    addNewQuestion: builder.mutation({
      query: (data) => ({
        url: `/courses/add-question`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["courses", "course-details"],
    }),
    addNewAnswer: builder.mutation({
      query: (data) => ({
        url: `/courses/add-answer`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["courses", "course-details"],
    }),
    addReviewInCourse: builder.mutation({
      query: ({ data, courseId }) => ({
        url: `/courses/add-review/${courseId}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["courses", "course-details"],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useDeleteCourseMutation,
  useGetSingleCourseQuery,
  useEditCourseMutation,
  useGetUserAllCourseQuery,
  useGetCourseDetailsQuery,
  useGetCourseContentQuery,
  useAddNewQuestionMutation,
  useAddNewAnswerMutation,
  useAddReviewInCourseMutation,
} = coursesApi;
