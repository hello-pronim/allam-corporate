import React, { useState, useEffect } from "react";
import { css } from "@styled-system/css";
import Buying from "../Forms/Buying";
import Suppliers from "../Forms/Suppliers";
import GeneralEnquiry from "../Forms/GeneralEnquiry";
import { LocationModel } from "@models";
import CardGrid from "@components/CardGrid/CardGrid";
import { ImageButton, Button } from "@components/Common/Common";
import Appointment from "../Forms/Appointment";
import styles from "./TabbedContent.module.scss";

export interface TabbedContentProps {
  locations: LocationModel[];
}

const TabbedContent = ({ locations }: TabbedContentProps) => {
  const selector = React.useRef<HTMLSelectElement>(null);
  const [formType, setFormType] = useState("General enquiry");
  const [formTypeIndex, setFormTypeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("contact");
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  let FormKey = new Map([
    ["General enquiry", GeneralEnquiry],
    ["Request an appointment", Appointment],
    ["I'm interested in buying", Buying],
    ["Trade and Suppliers", Suppliers],
  ]);

  const ActiveForm = FormKey.get(formType);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const setActiveForm = (entry: any) => {
    setFormType(entry.target.value);
    selector.current?.selectedIndex &&
      setFormTypeIndex(selector.current?.selectedIndex);
  };

  const handleOnSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    const storedForm = localStorage.getItem("active-form");
    const storedFormIndex = localStorage.getItem("active-form-index");
    storedForm && setFormType(storedForm);

    if (activeTab === "contact") {
      //@ts-ignore
      selector.current.selectedIndex = storedFormIndex;
    }
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("active-form", formType);
    localStorage.setItem("active-form-index", "" + formTypeIndex);
  }, [formType, formTypeIndex]);

  useEffect(() => {
    getWindowDimensions();

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.TabbedContent}>
      <div
        className={styles.TabbedContentWrapper}
        css={css({
          backgroundImage: `url("/assets/images/temp/contact-background.jpg")`,
        })}
      >
        <div className={styles.TabWrapper}>
          <div className={styles.TabContainer}>
            <ImageButton
              icon="grid-view"
              label={`Contact${windowDimensions.width > 768 ? " Us" : ""} `}
              css={css({ bg: "#ffca04" })}
              onClick={() => setActiveTab("contact")}
            />
            <div className={styles.Divider}></div>
            <ImageButton
              icon="map"
              label={`${windowDimensions.width > 768 ? "Our " : ""}Locations`}
              onClick={() => setActiveTab("locations")}
            />
          </div>
        </div>
        {activeTab === "contact" && (
          <div className={styles.Content}>
            <div className={styles.dropdownWrapper}>
              <div>
                <h4>
                  Please fill out the form and we&#39;ll get back to you shortly
                </h4>
                <h6>What&#39;s the reason for your enquiry?</h6>
                <select
                  className={styles.dropdown}
                  onChange={(e) => setActiveForm(e)}
                  ref={selector}
                >
                  <option value="General enquiry">General enquiry</option>
                  <option value="Request an appointment">
                    Request an appointment
                  </option>
                  <option value="I'm interested in buying">
                    I&#39;m interested in buying
                  </option>
                  <option value="Trade and Suppliers">
                    Trade and Suppliers
                  </option>
                </select>
              </div>
            </div>
            {
              //@ts-ignore
              <ActiveForm handleOnSubmit={handleOnSubmit} />
            }
          </div>
        )}
        {activeTab === "locations" && (
          <div className={styles.locationWrapper}>
            <div className={styles.gridWrapper}>
              <CardGrid
                title="Our locations"
                col={[1, 2, 3]}
                padding={[80, 160]}
              >
                {locations?.map((location, id) => (
                  <div className={styles.locationCard} key={id}>
                    <h5>{location?.linkedEstates?.[0]?.title} Estate</h5>
                    <p>{`${location?.linkedEstates?.[0]?.streetAddress},`}</p>
                    <p>{`${location?.linkedEstates?.[0]?.suburb} ${location?.linkedEstates?.[0]?.estateState} ${location?.linkedEstates?.[0]?.postcode}`}</p>

                    <div className={styles.divider} />

                    <h5>{location.officeName}</h5>
                    <p>
                      {`${location.streetAddress},`}
                      <br />
                      {`${location.suburb} ${location.locationState} ${location.postcode}`}
                    </p>
                    <p>
                      <strong>{location.daysOpen}</strong>
                      {` ${location.hoursOpen}`}
                      <br />
                      {location.phoneNumber && (
                        <>
                          <strong>Phone</strong> {location.phoneNumber}
                        </>
                      )}
                    </p>
                    <div className={styles.divider} />
                    <div className={styles.locationCardCTAs}>
                      {location.directionsLink && (
                        <Button rounded href={location.directionsLink}>
                          Get directions
                        </Button>
                      )}
                      {location?.linkedEstates?.[0] && (
                        <Button
                          color="light"
                          rounded
                          href={`/find-estate/${location?.linkedEstates?.[0]?.slug}`}
                        >
                          View estate
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardGrid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedContent;
