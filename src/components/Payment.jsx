import React, { useEffect, useState } from "react";
import { Heading } from "./Typography";
import Button from "./Button";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CourseCard from "./CourseCard";
import FadeIn from "./FadeIn";
import PromoCardModal from "./PromoCardModal";
import { formatRupiah } from "../utils/constants/function";

export function Payment() {
  const params = useParams();
  const [cardCourse, setCardCourse] = useState(null);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handlePromoModalClick = () => setIsPromoModalOpen(true);
  const handleClosePromoModal = () => setIsPromoModalOpen(false);
  const handleApplyPromo = (discountAmount) => setDiscountAmount(discountAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCardCourseData = async () => {
      try {
        const result = await dispatch(courseDetailCourseAct(params.id));
        setCardCourse(result);
      } catch (error) {
        console.error('Error fetching card course data:', error);
      }
    };

    fetchCardCourseData();
  }, [params.id, dispatch]);

  if (!cardCourse) {
    return null;
  }

  const totalPay = cardCourse.price - discountAmount;
  return (
    <div className="bg-softGrey py-16 md:pt-0 px-10 lg:px-32 flex flex-col md:flex-row gap-10 md:justify-center md:items-center min-h-screen">
      <FadeIn delay={0.2} direction="right" fullWidth>
        <CourseCard course={cardCourse} />
      </FadeIn>
      <FadeIn delay={0.2} direction="left" fullWidth>
        <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col gap-5">
          <Heading variant="h3" className="text-darkGrey text-center">
            Payment
          </Heading>
          <span className="font-semibold">Code promo</span>
          <Button
            className="w-full text-center bg-softGrey rounded-full px-5 py-3"
            onClick={handlePromoModalClick}
          >
            Use Promo to save more
          </Button>
          {isPromoModalOpen && (
            <PromoCardModal
              handleClose={handleClosePromoModal}
              onApplyPromo={handleApplyPromo}
              cardCourse={cardCourse}
            />
          )}
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Payment details</span>
            <div className="flex flex-row justify-between">
              <span className="text-darkGrey">Course Pricing</span>
              <span>{formatRupiah(cardCourse.price)}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-darkGrey">Discount</span>
              <span>{formatRupiah(discountAmount)}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-semibold">Total Pay</span>
              <span className="font-semibold">{formatRupiah(totalPay)}</span>
            </div>
          </div>
          <Button className="px-5 py-3 bg-darkOrange text-white rounded-full hover:scale-105">
            Bayar dan Ikuti Kelas Selamanya
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
