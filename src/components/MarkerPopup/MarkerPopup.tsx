import React from "react";
import { Popup } from "react-map-gl";
import { useRecoilState } from "recoil";
import { markerPopupState } from "@states/atoms/markerPopup";
import LandCard from "@components/LandCard/LandCard";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import EstateCard from "@components/EstateCard/EstateCard";

export interface IMarkerPopupProps {
  homesList?: any[];
  onClose: () => void;
}

const MarkerPopup = ({ onClose, homesList }: IMarkerPopupProps) => {
  const [markerPopup, setMarkerPopup] = useRecoilState(markerPopupState);

  const renderCard = () => {
    if (markerPopup.type === "home") {
      return <PropertyCard homeData={markerPopup.data} simple />;
    }
    if (markerPopup.type === "land")
      return <LandCard landData={markerPopup.data} simple />;
    return (
      <EstateCard estate={markerPopup.data} homesList={homesList} simple />
    );
  };

  return markerPopup.data ? (
    <Popup
      tipSize={8}
      anchor="top"
      longitude={Number(markerPopup.data?.longitude)}
      latitude={Number(markerPopup.data?.latitude)}
      closeOnClick={false}
      onClose={() => {
        setMarkerPopup({ data: null, type: "" });
        onClose();
      }}
    >
      {renderCard()}
    </Popup>
  ) : null;
};

export default MarkerPopup;
