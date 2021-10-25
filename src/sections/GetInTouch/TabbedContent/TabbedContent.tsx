import React, { useState, useEffect } from "react";
import styles from "./TabbedContent.module.scss";
import { ImageButton, Button } from "@components/Common/Common";
import { css } from "@styled-system/css";
import GeneralEnquiry from "../Forms/GeneralEnquiry";
import Appointment from "../Forms/Appointment";
import Suppliers from "../Forms/Suppliers";
import Buying from "../Forms/Buying";
import CardGrid from "@components/CardGrid/CardGrid";

export interface TabbedContentProps {}

const TabbedContent = () => {
  const selector = React.useRef<HTMLSelectElement>(null);
  const [formType, setFormType] = useState("General enquiry");
  const [formTypeIndex, setFormTypeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("contact");

  let FormKey = new Map([
    ["General enquiry", GeneralEnquiry],
    ["Request an appointment", Appointment],
    ["I'm interested in buying", Buying],
    ["Trade and Suppliers", Suppliers],
  ]);

  const ActiveForm = FormKey.get(formType);

  useEffect(() => {
    const storedForm = localStorage.getItem("active-form");
    const storedFormIndex = localStorage.getItem("active-form-index");
    storedForm && setFormType(storedForm);

    if (activeTab === 'contact') {
      //@ts-ignore
      selector.current.selectedIndex = storedFormIndex;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("active-form", formType);
    localStorage.setItem("active-form-index", "" + formTypeIndex);
  }, [formType]);

  const setActiveForm = (entry: any) => {
    setFormType(entry.target.value);
    selector.current?.selectedIndex &&
      setFormTypeIndex(selector.current?.selectedIndex);
  };

  return (
    <div className={styles.TabbedContent}>
      <div
        className={styles.TabbedContentWrapper}
        css={css({
          backgroundImage: `url("/assets/images/home/img-monterey-bg.jpg")`,
        })}
      >
        <div className={styles.TabWrapper}>
          <div className={styles.TabContainer}>
            <ImageButton
              icon="grid-view"
              label="Contact Us"
              css={css({ bg: "#ffca04" })}
              onClick={() => setActiveTab("contact")}
            />
            <div className={styles.Divider}></div>
            <ImageButton
              icon="gallery"
              label="Our Locations"
              onClick={() => setActiveTab("locations")}
            />
          </div>
        </div>
        {activeTab === "contact" && (
          <div className={styles.Content}>
            <h4>Please fill out the form and we'll get back to you shortly</h4>
            <h6>What's the reason for your enquiry?</h6>
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
                I'm interested in buying
              </option>
              <option value="Trade and Suppliers">Trade and Suppliers</option>
            </select>
            {
              //@ts-ignore
              <ActiveForm />
            }
          </div>
        )}
        {activeTab === "locations" && (
          <div className={styles.locationWrapper}>
            <div className={styles.gridWrapper}>
              <CardGrid
                title="News and Events"
                col={[1, 3]}
                padding={[80, 160]}
              >
                <div className={styles.locationCard}>
                  <h5>Ardennes Estate</h5>
                  <p>Ardennes Avenue, Edmondson Park NSW 2174</p>
                  <div className={styles.divider} />
                  <h5>Sales Centre</h5>
                  <p>
                    2 Moscow Road, <br/>
                    Edmondson Park NSW <br/>
                    <strong>Thurs to Mon</strong> 10am - 5pm <br/>
                    <strong>Phone</strong> 0405 205 048
                  </p>
                  <div className={styles.divider} />
                  <div>
                    <Button rounded href="#">Get directions</Button>
                    <Button color="light" rounded href="#">View estate</Button>
                    </div>
                </div>
              </CardGrid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedContent;
