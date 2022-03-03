import React, { useState, useEffect } from "react";
import { css } from "@styled-system/css";
import { ImageButton } from "@components/Common/Common";
import Buying from "../Forms/Buying";
import Suppliers from "../Forms/Suppliers";
import Maintenance from "../Forms/Maintenance";
import GeneralEnquiry from "../Forms/GeneralEnquiry";
import styles from "../../GetInTouch/GetInTouch.module.scss";
import { useRouter } from "next/router";

const Contact = (estateList: any) => {
  const selector = React.useRef<HTMLSelectElement>(null);
  const [formType, setFormType] = useState("I'm interested in buying");
  const [formTypeIndex, setFormTypeIndex] = useState(0);
  const router = useRouter();
  const [selectedEstate, setSelectedEstate] = useState("");
  const [inspection, setInspection] = useState(false);
  const [crmId, setCrmId] = useState("");

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  let FormKey = new Map([
    ["I'm interested in buying", Buying],
    ["Maintenance", Maintenance],
    ["Trade and Suppliers", Suppliers],
    ["General enquiry", GeneralEnquiry],
  ]);

  const ActiveForm = FormKey.get(formType);
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  useEffect(() => {
    setSelectedEstate((router.query.estate as string) || "");
  }, [router.query.estate]);

  useEffect(() => {
    if (router.query.inspection) {
      setInspection(true);
    }
  }, [router.query.inspection]);

  useEffect(() => {
    if (router.query.crmId) {
      setCrmId(router.query.crmId as string);
    }
  }, [router.query.crmId]);

  const setActiveForm = (entry: any) => {
    setFormType(entry.target.value);
    selector.current?.selectedIndex &&
      setFormTypeIndex(selector.current?.selectedIndex);
  };

  const handleOnSubmit = (values: any) => {
    console.log(values);
  };

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
              onClick={() => () => router.push("/get-in-touch")}
            />
            <div className={styles.Divider}></div>
            <ImageButton
              icon="map"
              label={`${windowDimensions.width > 768 ? "Our " : ""}Locations`}
              onClick={() => router.push("/get-in-touch/locations")}
            />
          </div>
        </div>

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
                <option
                  value="I'm interested in buying"
                  selected={formType === "I'm interested in buying"}
                >
                  I&#39;m interested in buying
                </option>
                <option value="Maintenance">Maintenance</option>
                <option value="Trade and Suppliers">Trade and Suppliers</option>
                <option value="General enquiry">General enquiry</option>
              </select>
            </div>
          </div>
          {
            //@ts-ignore
            <ActiveForm
              estateList={estateList}
              selectedEstate={selectedEstate}
              inspection={inspection}
              crmId={crmId}
              handleOnSubmit={handleOnSubmit}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Contact;
