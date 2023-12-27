import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

const TestingPage = () => {
  const [data, setData] = useState([
    {
      id: 58,
      orderId: 848884363,
      userId: 6,
      courseId: 67,
      total_price: 150000,
      discount: 0,
      status: "paid",
      promoId: null,
      payment_type: "qris",
      transaction_time: "2023-12-21T16:46:18.000Z",
      createdAt: "2023-12-21T09:46:10.914Z",
      updatedAt: "2023-12-21T09:46:40.134Z",
      course: {
        id: 67,
        title: "course beginner 1",
        description: "Description beginner 1",
        image: null,
        telegram_group: "https://t.me/joinchat/1",
        requirements: ["React JS", "Tailwind css", "Node JS"],
        level: "beginner",
        price: 150000,
        author: "CourseHub",
        category_id: 1,
        isDeleted: false,
        createdAt: "2023-12-20T07:53:35.444Z",
        updatedAt: "2023-12-20T07:53:35.444Z",
        ratings: [],
        averageRating: 0,
      },
    },
    {
      id: 57,
      orderId: 681590215,
      userId: 6,
      courseId: 67,
      total_price: 150000,
      discount: 0,
      status: "Pending",
      promoId: null,
      payment_type: null,
      transaction_time: null,
      createdAt: "2023-12-21T09:45:54.169Z",
      updatedAt: "2023-12-21T09:45:54.169Z",
      course: {
        id: 67,
        title: "course beginner 1",
        description: "Description beginner 1",
        image: null,
        telegram_group: "https://t.me/joinchat/1",
        requirements: ["React JS", "Tailwind css", "Node JS"],
        level: "beginner",
        price: 150000,
        author: "CourseHub",
        category_id: 1,
        isDeleted: false,
        createdAt: "2023-12-20T07:53:35.444Z",
        updatedAt: "2023-12-20T07:53:35.444Z",
        ratings: [],
        averageRating: 0,
      },
    },
    {
      id: 56,
      orderId: 668695099,
      userId: 6,
      courseId: 67,
      total_price: 150000,
      discount: 0,
      status: "Pending",
      promoId: null,
      payment_type: null,
      transaction_time: null,
      createdAt: "2023-12-21T09:45:52.887Z",
      updatedAt: "2023-12-21T09:45:52.887Z",
      course: {
        id: 67,
        title: "course beginner 1",
        description: "Description beginner 1",
        image: null,
        telegram_group: "https://t.me/joinchat/1",
        requirements: ["React JS", "Tailwind css", "Node JS"],
        level: "beginner",
        price: 150000,
        author: "CourseHub",
        category_id: 1,
        isDeleted: false,
        createdAt: "2023-12-20T07:53:35.444Z",
        updatedAt: "2023-12-20T07:53:35.444Z",
        ratings: [],
        averageRating: 0,
      },
    },
    {
      id: 55,
      orderId: 2082486288,
      userId: 6,
      courseId: 47,
      total_price: 350000,
      discount: 0,
      status: "Failed",
      promoId: null,
      payment_type: "qris",
      transaction_time: "2023-12-21T16:37:33.000Z",
      createdAt: "2023-12-21T09:37:30.047Z",
      updatedAt: "2023-12-21T09:37:52.791Z",
      course: {
        id: 47,
        title: "Prototyping Excellence in UI/UX",
        description:
          "Learn the art of prototyping with this course covering the benefits of prototyping, choosing the right prototyping tools, creating low-fidelity prototypes, using interactive hotspots, and user testing on prototypes.",
        image:
          "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/02/93_ux_prototyping_tools_illustration_blog.jpg",
        telegram_group: null,
        requirements: ["Adobe XD", "Figma"],
        level: "intermediate",
        price: 350000,
        author: "CourseHub",
        category_id: 1,
        isDeleted: false,
        createdAt: "2023-12-14T08:10:27.518Z",
        updatedAt: "2023-12-14T08:10:27.518Z",
        ratings: [],
        averageRating: 0,
      },
    },
  ]);

  return (
    <div className="grid grid-cols-3 gap-4 px-24 py-24">
      {data.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isPayment={true}
          isHistory={true}
        />
      ))}
    </div>
  );
};

export default TestingPage;
