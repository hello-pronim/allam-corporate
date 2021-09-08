import React from "react";
import Link from "next/link";
import styles from "./BreadCrumb.module.scss";

export interface IBreadCrumbProps {}

const BreadCrumb = ({}: IBreadCrumbProps) => {
  return (
    <div className={styles.breadCrumb}>
      <div className={styles.breadCrumbWrapper}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Find your perfect estate</a>
            </Link>
          </li>
          {/* {
            breadcrumb && breadcrumb.map(item => {
              return <li key={item.slug}><Link href={`${getUri(currentLocation.initialLocation)}/${item.slug}`}><a>{item.name}</a></Link></li>
            })
          } */}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
