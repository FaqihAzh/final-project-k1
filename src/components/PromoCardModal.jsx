import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { promoAct } from "../redux/actions/promoActions/promo";
import { Heading, Paragraph } from "./Typography";
import FadeIn from "./FadeIn";
import { XCircleIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

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
  }, []);

  const dispatch = useDispatch();

  const getPromoData = () => {
    dispatch(promoAct());
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center fixed inset-0 bg-darkGrey bg-opacity-70">
      <div className="bg-white rounded-3xl p-12 ">
        <div className="flex flex-col items-end">
          <XCircleIcon
            className="text-darkGrey hover:text-lightGrey w-7 h-7"
            onClick={handleClosePromoModal}
          ></XCircleIcon>
        </div>
        <div className="flex flex-col gap-5">
          <Heading variant="h3" className="text-center">
            Select Promo
          </Heading>
          <div className="flex flex-col gap-4">
            {promosData.map((promo) => (
              <div
                key={promo.id}
                className={`flex bg-softGrey p-4 rounded-2xl gap-2 items-center ${
                  selectedPromo === promo ? "outline outline-darkOrange" : ""
                }`}
                onClick={() => setSelectedPromo(promo)}
              >
                <ReceiptPercentIcon className="w-6 h-6"></ReceiptPercentIcon>
                <div className="flex flex-row justify-between gap-4">
                  <Paragraph variant="large">{promo.code_promo}</Paragraph>
                  <Paragraph variant="large" className="">
                    Diskon {promo.discount}%
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="px-5 py-3 bg-darkOrange text-white rounded-full hover:scale-105"
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
