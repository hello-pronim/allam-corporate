import React from "react";
import Link from "next/link";
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
      return (
        <Link href={`/find-home/${markerPopup.data.slug}`}>
          <a>
            <PropertyCard homeData={markerPopup.data} simple />;
          </a>
        </Link>
      );
    }
    if (markerPopup.type === "land")
      return (
        <Link href={`/find-land/${markerPopup.data.slug}`}>
          <a>
            <LandCard landData={markerPopup.data} simple />
          </a>
        </Link>
      );
    return (
      <Link href={`/find-land/${markerPopup.data.slug}`}>
        <a>
          <EstateCard estate={markerPopup.data} homesList={homesList} simple />
        </a>
      </Link>
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
