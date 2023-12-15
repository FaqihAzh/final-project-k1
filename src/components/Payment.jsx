import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CourseCard from "./CourseCard";
import FadeIn from "./FadeIn";
import PromoCardModal from "./PromoCardModal";
import { formatRupiah } from "../utils/constants/function";
import {
  courseCheckoutAct,
  courseCheckoutFreeAct,
} from "../redux/actions/courseActions/courseCheckout";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { courseCheckoutNotifAct } from "../redux/actions/courseActions/courseCheckoutNotif";

export function Payment() {
  const params = useParams();
  const [cardCourse, setCardCourse] = useState([]);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoName, setPromoName] = useState("");
  const [snapToken, setSnapToken] = useState("");
  const [formData, setFormData] = useState({
    courseId: Number(params.id),
    promoCode: "",
  });

  const handlePromoModalClick = () => setIsPromoModalOpen(true);
  const handleClosePromoModal = () => setIsPromoModalOpen(false);
  const handleApplyPromo = (discountAmount) =>
    setDiscountAmount(discountAmount);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailCourseData();
  }, [params.id, dispatch, promoName]);

  useEffect(() => {
    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          console.log("Transaction is success:", result);
          dispatch(
            courseCheckoutNotifAct({
              order_id: result.order_id,
              transaction_status: result.transaction_status,
              payment_type: result.payment_type,
              transaction_time: result.transaction_time,
            })
          );
        },
        onPending: function (result) {
          console.log("Transaction is pending:", result);
          dispatch(
            courseCheckoutNotifAct({
              order_id: result.order_id,
              transaction_status: result.transaction_status,
              payment_type: result.payment_type,
              transaction_time: result.transaction_time,
            })
          );
        },
        onError: function (result) {
          console.log("Transaction is error:", result);
          dispatch(
            courseCheckoutNotifAct({
              order_id: result.order_id,
              transaction_status: result.transaction_status,
              payment_type: result.payment_type,
              transaction_time: result.transaction_time,
            })
          );
        },
        onClose: function () {
          console.log(
            "Customer closed the popup without finishing the payment"
          );
        },
      });
    }
  }, [snapToken, dispatch]);

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(params.id));
    setCardCourse(result);
    setFormData({
      courseId: Number(params.id),
      promoCode: promoName,
    });
  };

  if (!cardCourse) {
    return null;
  }

  const totalPay = cardCourse.price - discountAmount;
  const persent = (discountAmount / cardCourse.price) * 100;

  const handleBuyCourse = async () => {
    const success = await dispatch(courseCheckoutAct(formData));
    console.log(success, "success");
    setSnapToken(success.token);
  };

  const handleBuyCourseFree = async () => {
    const success = await dispatch(courseCheckoutFreeAct(params.id));
    console.log(success, "success");

    if (success) {
      navigate(`/payment/success/${params.id}`);
    }
  };

  return (
    <div className="bg-softGrey py-24 px-4 md:px-12 lg:px-24  min-h-screen">
      <FadeIn delay={0.2} direction="down" fullWidth>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-0 md:gap-8 bg-white p-8 rounded-xl shadow-xl w-full items-start">
          <div className="col-span-1 !-mt-6">
            <CourseCard course={cardCourse} isPayment={true} />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <span className="font-semibold">Let's to Payment</span>
            <Button
              className="w-full text-center bg-softGrey rounded-full px-5 py-3"
              onClick={handlePromoModalClick}
            >
              {promoName ? promoName : "Promo Code"}
            </Button>
            {isPromoModalOpen && (
              <PromoCardModal
                handleClose={handleClosePromoModal}
                onApplyPromo={handleApplyPromo}
                cardCourse={cardCourse}
                setPromoName={setPromoName}
              />
            )}
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Payment details</span>
              <div className="flex flex-row justify-between">
                <span className="text-darkGrey">Payment Method</span>
                <span>Via Midtrans</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-darkGrey">Course Pricing</span>
                <span>{formatRupiah(cardCourse.price)}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-darkGrey">Discount {persent}%</span>
                <span>{formatRupiah(discountAmount)}</span>
              </div>

              <hr />
              <div className="flex flex-row justify-between">
                <span className="font-semibold">Total Pay</span>
                <span className="font-semibold">{formatRupiah(totalPay)}</span>
              </div>
            </div>
            <Button
              onClick={
                cardCourse.price === 0 ? handleBuyCourseFree : handleBuyCourse
              }
              className="px-5 py-3 bg-darkOrange text-white rounded-full hover:scale-105"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
