import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { promoAct } from "../redux/actions/promoActions/promo";
import { Heading, Paragraph } from "./Typography";
import { XCircleIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import PromoCardModalSkeleton from "./SkeletonLoading/PromoCardModalSkeleton";

const PromoCardModal = ({
  handleClose,
  onApplyPromo,
  cardCourse,
  setPromoName,
}) => {
  const promosData = useSelector((store) => store.promo.promos);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const handleClosePromoModal = () => handleClose();

  const applyPromo = () => {
    if (selectedPromo) {
      const promo = selectedPromo.code_promo;
      const discountAmount = (selectedPromo.discount / 100) * cardCourse.price;
      onApplyPromo(discountAmount);
      setPromoName(promo);
    }
    handleClosePromoModal();
  };

  useEffect(() => {
    getPromoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const getPromoData = () => {
    dispatch(promoAct());
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <PromoCardModalSkeleton />;
  }

  return (
    <div className="px-4 h-screen w-full flex flex-col justify-center items-center fixed inset-0 bg-darkGrey bg-opacity-70">
      <div className="bg-white rounded-3xl p-6 md:p-12 relative  w-full md:w-3/4 lg:w-1/3">
        <XCircleIcon
          className="text-darkGrey md:text-white  w-10 h-10 top-3 right-3 md:-top-8 md:-right-8 absolute cursor-pointer"
          onClick={handleClosePromoModal}
        ></XCircleIcon>
        <div className="flex flex-col gap-4">
          <Heading variant="h3" className="text-center">
            Select Promo
          </Heading>
          <div className="flex flex-col gap-4">
            {promosData.map((promo) => (
              <div
                key={promo.id}
                className={`flex gap-1 flex-row justify-between py-3 px-4 md:!p-4 rounded-2xl md:gap-4 items-center cursor-pointer ${
                  selectedPromo === promo
                    ? "bg-darkOrange bg-opacity-90 text-white"
                    : "bg-softGrey text-darkGrey hover:outline hover:outline-1 hover:outline-darkOrange"
                }`}
                onClick={() => {
                  if (selectedPromo === promo) setSelectedPromo(null);
                  else setSelectedPromo(promo);
                }}
              >
                <div className="flex gap-2">
                  <ReceiptPercentIcon className="w-6 h-6"></ReceiptPercentIcon>
                  <Paragraph className="text-base lg:text-lg">
                    {promo.code_promo}
                  </Paragraph>
                </div>
                <Paragraph className="text-base lg:text-lg">
                  Discount {promo.discount}%
                </Paragraph>
              </div>
            ))}
          </div>
          <Button
            className="px-5 py-3 bg-darkOrange text-white rounded-full hover:scale-105 font-semibold"
            onClick={applyPromo}
          >
            Apply Promo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoCardModal;
