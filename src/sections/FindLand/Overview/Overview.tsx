import React from "react";
import { useRecoilValue } from "recoil";
import classnames from "classnames/bind";

import { filteredLands } from "@states/atoms/lands";
import MapView from "@components/MapView/MapView";
import styles from "./Overview.module.scss";

const cx = classnames.bind(styles);

export interface IOverviewProps {
  isFullScreen?: boolean;
}

const Overview = ({ isFullScreen = false }: IOverviewProps) => {
  const landsList = useRecoilValue(filteredLands);

  return (
    <div className={cx("overview", { fullScreen: isFullScreen })}>
      <MapView data={landsList} type="land" />
    </div>
  );
};

export default Overview;
